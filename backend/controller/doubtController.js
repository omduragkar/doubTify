const expressAsyncHandler = require("express-async-handler");
const { isValidObjectId } = require("mongoose");
const Doubts = require("../models/doubts");
const clientmongo = require("mongodb").MongoClient;

module.exports.raiseDoubt = expressAsyncHandler(async function(req, res){
    let re = req.body;
    if(!re.doubt || !re.description){
        res.status(401).json({
            "err":401,
            "message":"Complete all the fields!"
        });
    }else{
        let raisedDoubt = await Doubts.create({
            doubt:re.doubt,
            description:re.description,
            doubtBy:req.user._id,
        });
        if(!raisedDoubt){``
            res.status(401).json({
                "err":401,
                "message":"Error in creating!"
            });
            
        }else{
            res.json({
                "title":`Yay! Doubt with id: ${raisedDoubt._id} raised`,
                "message":`Doubt with reference id: ${raisedDoubt._id} raised.`,
                "doubt":raisedDoubt,
                "id":raisedDoubt._id
            })
        }
    }
})

// module.exports.schema = expressAsyncHandler(async function(req, res){
//     let status_options , contact_details, work_details ;
//     clientmongo.connect(process.env.mongoURI, async function (err, db){
//         if(err){
//             res.status(400).json({
//                 "message":"Connection error!"
//             })
//         }
//         var dbo = db.db(process.env.db)
//         status_options = await dbo.collection("ticket_status").find({}).toArray();
//         contact_details = await dbo.collection("contact_details").find({}).toArray();
//         work_details = await dbo.collection("work_details").find({}).toArray();
//         res.json({
//             status_options,
//             work_details,
//             contact_details
//         })
//     });
// })

module.exports.getDoubt = expressAsyncHandler(async function(req, res){
    let re = req.params.doutbtId;
    console.log(re);
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
        
        let doubtStatus = await Doubts.findById(re);
        if(!doubtStatus){
            res.status(401).json({
                "err":401,
                "message":"No Doubt with given input does Exists!"
            });
            
        }else{
            res.json({
                "message":`Doubt with id: ${doubtStatus._id}!`,
                "ticket":doubtStatus,
            })
        }
    }
})
// module.exports.get_ticket_by_status = expressAsyncHandler(async function(req, res){
//     let re = req.body;
//     if(!re.status){
//         res.status(401).json({
//             "err":401,
//             "message":"please add tracking_id!"
//         });
//     }
//     else{
        
//         let ticket_status = await Tickets.find({status:re.status}).sort({createdAt:-1});
//         if(!ticket_status){
//             res.status(401).json({
//                 "err":401,
//                 "message":"No Ticket currently exist!"
//             });
            
//         }else{
//             res.json({
//                 "message":`success`,
//                 "ticket":ticket_status,
//             })
//         }
//     }
// })
// module.exports.change_status = expressAsyncHandler(async function(req, res){
//     let re = req.body;
//     if(!re.ticket_id || !re.ticket){
//         res.status(401).json({
//             "err":401,
//             "message":"please add tracking_id"
//         });
//     }
//     else if(!isValidObjectId(re.ticket_id)){
//         res.status(401).json({
//             "err":401,
//             "message":"Wrong tracking_id!"
//         });

//     }
//     else{
//         let ticket_status = await Tickets.findByIdAndUpdate(re.ticket_id, re.ticket, {new:true});
//         if(!ticket_status){
//             res.status(401).json({
//                 "err":401,
//                 "message":"No Ticket with given input does Exists!"
//             });
            
//         }else{
//             res.json({
//                 "message":`Ticket with id: ${ticket_status._id} Updated!`,
//                 "ticket":ticket_status,
//                 "status":ticket_status.status
//             })
//         }
//     }
// })