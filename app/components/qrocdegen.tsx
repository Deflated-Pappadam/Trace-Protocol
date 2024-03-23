'use client'

import QRcode from 'qrcode'
import Image from 'next/image'

type qrprops = {
    url: string;
    size: number;
}

export default function QR(props: qrprops) {
    async function createQr() {
        const qrurl = QRcode.toDataURL(props.url, { color: { dark: "#000000", light: "#ffffff" }, width: props.size })
        return qrurl
    }
    const url = createQr()
  return (
    <div>
      {url.then( (val) => {
        return <Image src={val} alt='' width={props.size} height={props.size}/>
      } )}
    </div>
  )
}

