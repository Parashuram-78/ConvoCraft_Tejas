import User from "../../models/user.js";
const userUpdate =async(req, res) => {
    const {id,name,profileImageUrl,phoneNumber}=req.body;
    console.log(id,name,phoneNumber,profileImageUrl);
    const user = await User.findOneAndUpdate({id},{$set:{name:name, phoneNumber:phoneNumber, profileImageUrl: profileImageUrl}}, {new: true,  useFindAndModify:false},
    );
    console.log(user);
    res.status(200).json({
        message: 'User Updated successfully',
       updatedInfo:{
        id:user.id,
        profileImageUrl:user.profileImageUrl,
        name:user.name,
        phoneNumber:user.phoneNumber
        }
    })
  }
  export default userUpdate;