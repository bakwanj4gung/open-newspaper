import React from 'react'

function LogoSubtitle({ paperSize }) {
    return (
        <div className="flex items-center gap-2 font-main-subtitle-logo font-bold text-center">
            <div className="h-0.5 border-t-2 border-orange-950 flex-1"></div>
            <p className={`${paperSize == 'a4-landscape' ? 'max-w-72' : 'max-w-96'} whitespace-nowrap font-bold tracking-wider text-xs uppercase truncate`}>Make Your Own News blablablablablalbablalbalbalbalb</p>
            <div className="h-0.5 border-t-2 border-orange-950 flex-1"></div>
        </div>
    )
}

export default LogoSubtitle