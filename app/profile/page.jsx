'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


import Profile from "@components/Profile";

const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/post`);
            const data = await response.json();

            setPosts(data);
        }
        if (session?.user.id) fetchPost();
    }, [])
    const handleEdite = () => {

    }

    const handleDelete = async () => {

    }

    return (
        <Profile name='My'
            desc='Welcome to your presonalized profile page'
            data={posts}
            handleEdite={handleEdite}
            handleDelete={handleDelete}

        />
    )
}

export default MyProfile