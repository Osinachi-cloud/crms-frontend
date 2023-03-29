import React, { useRef } from 'react'
// import { pdfFromReact } from "generate-pdf-from-react-html";
// import dateformat from 'dateformat';








// const InnerModal = React.forwardRef((props, ref) => {
const InnerModal = ((props: any) => {

//  const trnxDetails = props?.trnxDetails;
//  const transactionStatus = trnxDetails?.data?.status;

 console.log("pros", props);

 return (
   <>
     <div className="h-fit">
        <h1 className='text-center font-[800] my-[10px]'>Ogbodo Uchenna Emmanuel</h1>
         {/* <div className={`flex justify-center items-center gap-2 text-center w-fit m-auto px-[10px] py-[1px] rounded-[10px] ${trnxDetails?.status === 'pending' ? 'bg-[#f8deb0]' : trnxDetails?.status === 'approved' ? 'bg-[#aaf2aa]' : 'bg-[#f99d9d]'}`}> */}
         <div className={`flex justify-center items-center gap-2 text-center w-fit m-auto px-[10px] py-[1px] rounded-[10px]`}>

             {/* <div className={`h-[10px] w-[10px] rounded-[50%] ${trnxDetails?.status === 'pending' ? 'bg-[orange]' : trnxDetails?.status === 'approved' ? 'bg-[green]' : 'bg-[red]'}`} ></div> */}
             {/* <p className={` text-[12px] ${trnxDetails?.status === 'pending' ? 'text-[orange]' : trnxDetails?.status === 'approved' ? 'text-[green]' : 'text-[red]'}`}>{"trnxDetails?.status"}</p> */}
             <p className={`text-[12px]`}>{"status"}</p>

         </div>
         <table className='w-full mt-5'>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Request Reference</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.pgTrnxRef"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Borrower Full Name</th>
             {/* <td className='p-[5px] text-right text-[12px] font-[500]'>{trnxDetails.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td> */}
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.amount"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Identification Type</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Identification Number</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>
             {
                //  dateformat("trnxDetails?.created,mmm d, yyyy")
             }
             </td>
           </tr>

           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Beneficiary Account Number</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>

           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Location of Beneficiary</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>

           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Relationship Type</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>

           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Director Detail</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>

           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Director Detail</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Company Size</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Funding Source Category</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Funding Source</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Classification by Business Line</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Classification by Business Line sub sector</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Address of Security</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           {/* <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Owner of Security</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Unique Identification Type of Security Owner</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Guarantee</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Guarantee Type</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Guarantor Unique Identification Type</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Guarantor Unique Id</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Amount Guaranteed</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Credit Type</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Legal Status</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Credit Purpose by business lines</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Business lines sub-sector</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Credit Limit</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Outstanding Amount</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Fee Type</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Fee Amount</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>           
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Fee Detail</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Effective Date</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr> */}
           {/* <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Tenor</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Expiry Date</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Repayment Agreement Mode</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Specialized Loan</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Specialized Loan Period</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Interest Rate</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Collateral Present</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Collateral Secure</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Security Type</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Syndication</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Syndication Status</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Syndication Ref Number</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>Credit Reference Number	</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr>
           <tr className='h-[10px]'>
             <th className='p-[5px] text-left text-[12px] font-[500]'>CRMS Type</th>
             <td className='p-[5px] text-right text-[12px] font-[500]'>{"trnxDetails?.transactionType"}</td>
           </tr> */}





         </table>
       </div>
         {/* <button  onClick={() => pdfFromReact(".parent", "transactionDetails-file", "p", false, false)} className='w-[90%] bg-[#160846] py-[15px] absolute bottom-[20px] text-[#fff] text-[12px] rounded-[4px]'>Export Transaction</button> */}
       <button  onClick={()=> {
        //  props?.handleReceipt()
        
         }} className='w-[100%] bg-[#160846] py-[15px] mt-[20px] text-[#fff] text-[12px] rounded-[4px]'>Download Request</button>
   </>
 )
})


export default InnerModal



