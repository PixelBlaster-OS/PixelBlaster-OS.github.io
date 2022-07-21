import React from 'react'
import moment from 'moment';

const DeviceCard = ({data}) => {
    const {devicename, datetime, size, url, version} = data;
    var date = new Date(datetime*1000);
    var formattedDate = moment(date).format('DD/MM/YYYY');
    var sizeGB = (size/1024/1024/1024).toFixed(2);
    return (
        <div className={"justify-center items-center p-6 mx-auto bg-slate-700 text-slate-300 dark:bg-slate-300 dark:text-slate-700 rounded-xl shadow-lg row-span-2 grid overflow-hidden grid-cols-1 grid-rows-2 gap-2 w-60 h-[24rem] sm:w-96 sm:h-auto"}>
            <img className="mx-auto" src='images/left-hole.png' alt="device" style={{maxWidth: "50%"}} />
            <div className=" sm:text-xl font-medium font-mono">
                <div>
                    <p className="pb-2"><span className="font-extrabold">Device Name:</span> {devicename}</p>
                    <p className="pb-2"><span className="font-extrabold">Updated:</span> {formattedDate}</p>
                    <p className="pb-2"><span className="font-extrabold">Size:</span> {sizeGB} GB</p>
                    <p className="pb-2"><span className="font-extrabold">Version:</span> {version}</p>
                    <p><span className="font-extrabold">Download:</span> <a className="pb-2" href={url}>Here</a></p>

                </div>
            </div>
        </div>
    )
}

export default DeviceCard