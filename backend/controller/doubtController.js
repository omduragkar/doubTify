const expressAsyncHandler = require("express-async-handler");
const { isValidObjectId } = require("mongoose");
const Answers = require("../models/Answer");
const Comments = require("../models/Comments");
const Doubts = require("../models/doubts");
const User = require("../models/userModel");
const clientmongo = require("mongodb").MongoClient;

module.exports.raiseDoubt = expressAsyncHandler(async function(req, res){
    let re = req.body;
    if(!re.title || !re.description){
        res.status(401).json({
            "err":401,
            "message":"Complete all the fields!"
        });
    }else{
        let raisedDoubt = await Doubts.create({
            doubt:re.title,
            description:re.description,
            doubtBy:req.user._id,
        });
        if(!raisedDoubt){
            res.status(401).json({
                "err":401,
                "message":"Error in creating!"
            });
            
        }else{
            let addtoUser = await User.findByIdAndUpdate(req.user._id, {
                $push:{doubts:raisedDoubt._id}
            })
            res.json({
                "title":`Yay! Doubt with id: ${raisedDoubt._id} raised`,
                "message":`Doubt with reference id: ${raisedDoubt._id} raised.`,
                "doubt":raisedDoubt,
                "id":raisedDoubt._id
            })
        }
    }
})



module.exports.getDoubt = expressAsyncHandler(async function(req, res){
    let re = req.params.doutbtId;
    // console.log(re);
    if(!re){
        res.status(401).json({
            "err":401,
            "message":"please add doubtId!"
        });
    }
    else if(!isValidObjectId(re)){
        res.status(401).json({
            "err":401,
            "message":"Wrong doubtId!"
        });

    }
    else{
        
        let doubtStatus = await Doubts.findById(re).populate("doubtBy", "name")
        .populate({
            path : 'comments',
            populate : {
              path : 'by',
              select:{"name":1}
            }
          });
        if(!doubtStatus){
            res.status(401).json({
                "err":401,
                "message":"No Doubt with given input does Exists!"
            });
            
        }else{
            res.json({
                "message":`Doubt with id: ${doubtStatus._id}!`,
                "doubt":doubtStatus,
            })
        }
    }
})


module.exports.getAllDoubts = expressAsyncHandler(async function(req, res){

           
    let doubtStatus = await (await Doubts.find({})
    .populate('doubtBy', "name").populate({
        path : 'comments',
        populate : {
          path : 'by',
          select:{"name":1}
        }
      })
      .populate({
        path : 'Answer',
        populate : {
          path : 'by',
          select:{"name":1}
        }
      }))
      .reverse();
    if(!doubtStatus){
        res.status(401).json({
            "err":401,
            "message":"No Doubt with given input does Exists!"
        });
        
    }else{
        res.json({
            message:"success",
            doubts:doubtStatus            
        })
    }
    
})


module.exports.getPendingDoubts = expressAsyncHandler(async function(req, res){

           
    let doubtStatus = await Doubts.find({doubtStatus:"doubt_raised"}).populate('doubtBy', "name");
    if(!doubtStatus){
        res.status(401).json({
            "err":401,
            "message":"No Doubt with given input does Exists!"
        });
        
    }else{
        res.json({
            message:"success",
            doubts:doubtStatus            
        })
    }
    
})


module.exports.answerTA = expressAsyncHandler(async function(req, res){
    let re = req.body;
    if(!re.answer){
        res.status(401).json({
            "err":401,
            "message":"Please complete Answer!"
        });
    }else{
        let answermade = await Answers.create({
            Answer:re.answer,
            onDoubt:re.doubtId,
            by:req.user._id
        })
        let raisedDoubt = await Doubts.findByIdAndUpdate(re.doubtId,{
            doubtStatus:"doubt_resolved",
            Answer:answermade._id
        },
        {
            new:true
        });
        if(!raisedDoubt){
            res.status(401).json({
                "err":401,
                "message":"Error in finding!"
            });
            
        }else{
            let addtoUser = await User.findByIdAndUpdate(req.user._id, {
                pendingDoubt:{
                    id:undefined,
                    status:false
                }
            }, {new:true})
            res.json({
                user:addtoUser,
                raisedDoubt
            })
        }
    }
})
module.exports.assignDoubttoTA = expressAsyncHandler(async function(req, res){
    let re = req.body;
    if(!re.id){
        res.status(401).json({
            "err":401,
            "message":"Reclick"
        });
    }else{
        let raisedDoubt = await Doubts.findByIdAndUpdate(re.id,{
            doubtStatus:"doubt_assigned"
        },
        {
            new:true
        });
        if(!raisedDoubt){
            res.status(401).json({
                "err":401,
                "message":"Error in finding!"
            });
            
        }else{
            let addtoUser = await User.findByIdAndUpdate(req.user._id, {
                pendingDoubt:{
                    id:raisedDoubt._id,
                    status:true
                }
            }, {new:true})
            res.json({
                user:addtoUser,
                raisedDoubt
            })
        }
    }
})



module.exports.addComment = expressAsyncHandler(async function(req, res){
    let re = req.body;
    if(!re.comment){
        res.status(401).json({
            "err":401,
            "message":"comment Error"
        });
    }else{
        let addCommenttoDoubt = await Comments.create({
            comment:re.comment,
            by:req.user._id,
            onDoubt:re.id

        })
        let doubtwithComment = await Doubts.findByIdAndUpdate(re.id,{
            $push:{comments:addCommenttoDoubt._id}
        },
        {
            new:true
        })
        .populate('doubtBy', "name")
        .populate({path:"comments",populate : {
            path : 'by',
            select:{"name":1}
          }});
        // console.log({doubtwithComment,addCommenttoDoubt })
        if(!doubtwithComment){
            res.status(401).json({
                "err":401,
                "message":"Doubt Closed or Not Available!"
            });
            
        }else{
            res.json({
                comment:addCommenttoDoubt,
                doubtwithComment
            })
        }
    }
})
