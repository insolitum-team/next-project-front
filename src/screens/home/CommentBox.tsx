import PropTypes from 'prop-types'
import React from 'react'

interface Props {
    className: any
    hasDiv: boolean
}

export const CommentBox = ({
    className,
    hasDiv = true,
}: Props): JSX.Element => {
    return (
        <div
            className={`inline-flex items-start gap-[10px] px-[32px] py-[24px] relative bg-[#fffaef] rounded-[8px] overflow-hidden border-4 border-solid border-annotations ${className}`}
        >
            {hasDiv && (
                <p className="relative w-[200px] mt-[-4.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#926b06] text-[16px] tracking-[-0.32px] leading-[22px]">
                    Line comment. Use this component to add text descriptions
                    and annotations to arrows.
                </p>
            )}
        </div>
    )
}

CommentBox.propTypes = {
    hasDiv: PropTypes.bool,
}
