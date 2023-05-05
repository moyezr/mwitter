import { useRouter } from "next/router";
import useUser from "../hooks/useUser";
import { useCallback } from 'react'
import Image from "next/image";
interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean
}
const Avatar: React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {

    const router = useRouter();

    const { data: fetchedUser } = useUser(userId);

    const onClick = useCallback((event: any) => {
        event?.stopPropagation();

        const url = `/users/${userId}`;
        router.push(url);

    }, [router, userId])

  return (
    <div className={`
    ${hasBorder ? 'border-4 border-black' : ''}
    ${isLarge ? 'h-32 w-32': 'h-12 w-12'}
    rounded-full
    hover:opacity-90
    transition
    cursor-pointer
    relative
    `}>
        <Image src={fetchedUser?.profileImage || '/images/placeholder.png'} fill style={{
            objectFit: 'cover',
            borderRadius: '100%'
        }}
        alt="Avatar"
        onClick={onClick} />
    </div>
  )
}

export default Avatar