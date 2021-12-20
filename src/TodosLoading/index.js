import React from 'react'
import ContentLoader from 'react-content-loader'

export const TodosLoading = (props) => {
    return (
        <ContentLoader
            speed={3}
            backgroundColor="#2a333e"
            foregroundColor="#4c5662"
            style={{ width: '100%', height: '220px', marginTop: '20px' }}
            {...props}
        >
            <rect x="47" y="6"   rx="4" ry="4" width="100%" height="57" />
            <rect x="0"  y="6"   rx="4" ry="4" width="40"   height="57" />
            <rect x="47" y="82"  rx="4" ry="4" width="100%" height="57" />
            <rect x="0"  y="82"  rx="4" ry="4" width="40"   height="57" />
            <rect x="47" y="158" rx="4" ry="4" width="100%" height="57" />
            <rect x="0"  y="158" rx="4" ry="4" width="40"   height="57" />
        </ContentLoader>
    )
}
