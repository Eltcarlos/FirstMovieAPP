import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Empty } from '../../../Components/Notifications/Empty'
import Loader from '../../../Components/Notifications/Loader'
import Table2 from '../../../Components/Table2'
import { deleteUserAction, getAllUsersAction } from '../../../Redux/Actions/userActions'
import SideBar from '../SideBar'

const Users= () => {
  const dispatch = useDispatch();

  const { isLoading, isError, users } = useSelector(
    (state)=> state.adminGetAllUsers) 

// delete

 const { isError: deleteError, isSuccess} = useSelector(
  (state) => state.adminDeleteUser
 )

 //delete  user handler
  const deleteUsersHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this user')){
      dispatch(deleteUserAction(id))
      window.location.reload()
    }
  }

  useEffect(()=>{
    dispatch(getAllUsersAction());
    if(isError || deleteError){
      toast.error(isError || deleteError);
      dispatch({ 
        type: isError ? 'GET_ALL_USERS_RESET' : 'DELETE_USER_RESET'})
    } 
  }, [dispatch, isError, deleteError, isSuccess])

  return (
    <SideBar>
      <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold'>Users</h2>
          {isLoading ? (
            <Loader/> 
          ) : users.length > 0 ? (
            <Table2 
            data={users} 
            users={true} 
            onDeleteFunction={deleteUsersHandler}/>
          ) : (
            <Empty message='You dont have any user'/>
        )}
        
      </div>
    </SideBar>
  )
}

export default Users
