import React from 'react'

export const SelectInput = ({ data, onChange, value, name, placeholder, selectStatement }: any) => {

    return (
        <div className="inline-block relative w-full mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                    {placeholder}
                </label>
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
            >
                <option value=""> {selectStatement}</option>
                {
                    data.map((acctType: any) => (
                        <option key={acctType} value={acctType}>{acctType}</option>
                    ))
                }
            </select>
            <div className="pointer-events-none absolute inset-y-12 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>

    )
}

export const Input = ({id,type, placeholder, value, name, onChange}: any) => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                    {placeholder}
                </label>
                {/* <small style={{ color: "red", margin: "0", padding: "0" }}>{formErrors.value}</small> */}
                {/* <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.username && "border-red-500"}`} */}
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}

                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value.trim()}
                    name={name}
                    onChange={onChange}
                />
            </div>
        </>
    )
}