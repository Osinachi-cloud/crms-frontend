import React, { useState } from 'react'
import { Input, SelectInput } from '../components/formInputs'
import { customerType } from '../data/data'

const CustomerRequestForm = () => {

    const basicCustomerDetails = {
        BVN: "",
        idNum: "",
        credType: "",
        legalStatus: "",
        creditPurpose: "",
        businessType: ""

    }
    const [basicInfo, setBasicInfo] = useState<any>(basicCustomerDetails);
    const [fields, setFields] = useState([{ id: 1, value: '' }]);


    const handleChange = (e: any) => {
        setBasicInfo({
            ...basicInfo, [e.target.name]: e.target.value
        })
    }

    const addField = (e: any) => {
        e.preventDefault();
        setFields([...fields, { id: fields.length + 1, value: '' }]);
        console.log("fields", fields);
    };
    const removeField = (id: any) => {
        // e.preventDefault();
        let myFields = [...fields];
        let myArr = myFields.filter((field) => field.id !== id);
        // setFields([...fields, {id:1, value: ''}]);
        setFields(myArr);
        console.log("my Field", fields);
    };

    const handleInputChange = (index: any, event: any) => {
        const newFields = [...fields];
        newFields[index].value = event.target.value;
        setFields(newFields);
    };

    return (
        <>
            <div className="border md:grid-cols-2 w-[95%] m-auto pb-[1rem]">
            <div className='bg-[#E4E5E6] text-[#000] py-[0.5rem] px-[0.2rem] px-[2rem] mb-[2rem]'> <strong>CRMS300 FOR CHIKEZIE RICHARD NNAMDI</strong> </div>
                <div >
                </div>
                <form action="">
                    <div className='w-[90%] m-auto'>
                        <Form />
                        <Form />
                        <Form />
                        <Form />
                        <Form />
                        <div className='mb-12 border'>
                            <div className='bg-[#E4E5E6] text-[#000] py-[0.5rem] px-[0.2rem] px-[2rem]'> <strong>Basic Information</strong> </div>
                            {fields.map((field, index) => (
                                <div className="grid grid-cols-1 gap-x-8 px-[2rem] py-[0.5rem] md:grid-cols-2 mb-2">
                                    <>
                                        {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                                        <Input
                                            id={"BVN"}
                                            type={"text"}
                                            placeholder={"BVN"}
                                            value={basicInfo.BVN}
                                            name={"BVN"}
                                            onChange={handleChange}
                                        />
                                    </>
                                    <>
                                        {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                                        <SelectInput
                                            placeholder={"Identity Number"}
                                            value={basicInfo.idNum}
                                            name={"idNum"}
                                            data={customerType}
                                            // onChange={handleInputChange}
                                            selectStatement={"Select Choice"}
                                            // key={index}
                                            // value={field.value}
                                            onChange={(index: any, event: any) => handleInputChange(index, event)}
                                        />
                                    </>
                                    {
                                        fields.length > 1 &&
                                        <div className="flex justify-center items-center bg-[#f0f0f0] border hover:border hover:border-[red] text-white font-bold py-1 px-2 w-[70px] text-center rounded-[4px]" onClick={(id) => removeField(field.id)}>
                                            <i className="fa fa-trash text-[red]"></i>
                                        </div>
                                    }

                                </div>
                            ))}
                            <div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 w-[100px] text-center ml-[2rem] mb-[1rem] rounded-[4px] mt-[2rem]" onClick={(e) => addField(e)}>
                                Add
                            </div>

                        </div>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[4px]">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CustomerRequestForm


export const Form = () => {

    const basicCustomerDetails = {
        BVN: "",
        idNum: "",
        credType: "",
        legalStatus: "",
        creditPurpose: "",
        businessType: ""

    }
    const [basicInfo, setBasicInfo] = useState<any>(basicCustomerDetails)

    const handleChange = (e: any) => {
        setBasicInfo({
            ...basicInfo, [e.target.name]: e.target.value
        })

    }

    return (
        <>
            <div className='mb-12'>
                <div className='bg-[#E4E5E6] text-[#000] py-[0.5rem] px-[0.2rem] px-[2rem]'> <strong>Basic Information</strong> </div>
                <div className="grid grid-cols-1 gap-x-8 border p-[2rem] md:grid-cols-2">
                    <>
                        {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                        <Input
                            id={"BVN"}
                            type={"text"}
                            placeholder={"BVN"}
                            value={basicInfo.BVN}
                            name={"BVN"}
                            onChange={handleChange}
                        />
                    </>
                    <>
                        {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                        <SelectInput
                            placeholder={"Identity Number"}
                            value={basicInfo.idNum}
                            name={"idNum"}
                            data={customerType}
                            onChange={handleChange}
                            selectStatement={"Select Choice"}

                        />
                    </>
                    <>
                        {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                        <Input
                            id={"BVN"}
                            type={"text"}
                            placeholder={"BVN"}
                            value={basicInfo.BVN}
                            name={"BVN"}
                            onChange={handleChange}
                        />
                    </>
                    <>
                        {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                        <SelectInput
                            placeholder={"Identity Number"}
                            value={basicInfo.idNum}
                            name={"idNum"}
                            data={customerType}
                            onChange={handleChange}
                            selectStatement={"Select Choice"}

                        />
                    </>
                    <>
                        {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                        <Input
                            id={"BVN"}
                            type={"text"}
                            placeholder={"BVN"}
                            value={basicInfo.BVN}
                            name={"BVN"}
                            onChange={handleChange}
                        />
                    </>
                    <>
                        {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                        <SelectInput
                            placeholder={"Identity Number"}
                            value={basicInfo.idNum}
                            name={"idNum"}
                            data={customerType}
                            onChange={handleChange}
                            selectStatement={"Select Choice"}
                        />
                    </>
                </div>
            </div>
        </>
    )
}