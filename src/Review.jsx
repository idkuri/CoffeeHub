import React, { useState, useEffect } from 'react';

const Review = (props) => {
    const [data, setData] = useState(null)

    async function fetchReview() {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        
        const { data, error } = await props.supabase.from('Reviews').select().or(`id.eq.${id}`);
        setData(data[0])

    }

    useEffect(() => {
        fetchReview()
    }, [])

    function renderStars(stars) {
        let elemList = []
        for (let i = 0; i < stars; i++) {
            elemList.push(
                
            )
        }
        return elemList
    }

    

    return (
        <>
            {data != null? (<div>
            <p>{`Name: ${data['name']}`}</p>
            {renderStars()}
            <p>{`Comment: ${data['content']}`}</p>
            <p>{`Date: ${data['date_created']}`}</p>
        </div>):(<></>)}
        </>
    );
};

export default Review;