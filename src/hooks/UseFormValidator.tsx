import React from 'react'

const UseFormValidator = (formData: any) => {
    let error:any = {};
    if(!formData.username || formData.username.length === 0 || formData.username.trim() === ""){
        error.username = "Username must not be empty";
    }
    if(!formData.password || formData.password.length === 0 || formData.password.trim() === ""){
        error.password = "Password must not be empty";
    }
    if(!formData.accountNumber){
        error.accountNumber = "Account number can not be empty"
    }
    if(!formData.accountType || formData.accountType.length === 0 || formData.accountType.trim() === "" ){
        error.accountType = "Customer Type can not be empty"
    }
  return error;
}

export default UseFormValidator