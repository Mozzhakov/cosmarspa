import React from 'react';

export interface PageProps {
    
}

export default function Page({}: PageProps) {
    return (
        <div>
            <iframe
                src="https://book.squareup.com/appointments/zmhtr72158hx0a/location/LDT09K6231WYR/services"
                title="Online Booking"
                className="w-full  h-[800px] border rounded shadow"
                allowFullScreen
            />
        </div>
    );
}