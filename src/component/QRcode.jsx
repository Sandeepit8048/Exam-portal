import QRCode from 'qrcode'
import React,{useState} from 'react'

function QRcode() {
    const [qrCode, setQrCode] = useState("");
    const [data, setData] = useState("");


     function generateQRCode() {
        QRCode.toDataURL(qrCode, (err, qrCode)=>{
            if(err){
             console.log(err)
            }

            console.log(qrCode);
            setData(qrCode)
        })
     }

  return (
    <>
     <h2>Qr Code</h2>
     <input type="text" placeholder='http//google.com' onChange={(e)=>setQrCode(e.target.value)} value={qrCode} />
        <button onClick={generateQRCode}>Generate QR Code</button>
      
      <img src={data} alt="" />

    </>
  )
}

export default QRcode