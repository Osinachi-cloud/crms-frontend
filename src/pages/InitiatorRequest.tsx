import React, { useEffect, useState } from 'react'
import { SelectInput } from '../components/formInputs';
import { customerType } from '../data/data';
import UseFetch from '../hooks/UseFetch';
import UseFormValidator from '../hooks/UseFormValidator';

const InitiatorLogin = () => {
    let accountInfo = {
        accountNumber: "",
        accountType: ""
    }
    const [accountType, setAccountType] = useState(customerType);
    const [accountDetails, setAccountDetails] = useState(accountInfo);
    const [URL, setURL] = useState("");
    const { data, reFetchApi, loading } = UseFetch(URL, accountDetails);
    const [formErrors, setFormErrors] = useState<any>({});

    const handleInputChange = (e: any) => {
        setAccountDetails({
            ...accountDetails, [e.target.name]: e.target.value
        })
        console.log({ accountDetails });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setFormErrors(UseFormValidator(accountDetails));
        Object.keys(formErrors).length === 0 && reFetchApi();
    }

    useEffect(() => {
        setURL(`http://localhost:8080/${accountDetails.accountNumber}&${accountDetails.accountType}`)
    }, [accountDetails])

    return (
        <>
            <div className='flex justify-center items-center h-[100vh]'>
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="acctNum">
                                Account Number
                            </label>
                            <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.accountNumber}</small>

                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="acctNum"
                                type="text"
                                placeholder="Account Number"
                                onChange={handleInputChange}
                                value={accountDetails.accountNumber}
                                name={"accountNumber"}

                            />
                        </div>
                        <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.accountType}</small>
                        <SelectInput
                            data={accountType}
                            onChange={handleInputChange}
                            value={accountDetails.accountType}
                            name={"accountType"}
                            placeholder={"Account type"}
                            selectStatement={"Select Customer Type"}
                        />
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                                onClick={handleSubmit}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InitiatorLogin