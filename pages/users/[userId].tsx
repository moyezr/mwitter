import { useRouter } from "next/router";
import Header from "../../components/Layout/Header";
import useUser from "../../hooks/useUser";
import { ClipLoader } from "react-spinners";
import UserHero from "../../components/Users/UserHero";
import UserBio from "../../components/Users/UserBio";
import PostFeed from "../../components/posts/PostFeed";
const UserView = () => {

    const router = useRouter();
    const {userId} = router.query;

    const { data: fetchedUser, isLoading } = useUser(userId as string);

    if(isLoading || !fetchedUser) {
        return (
            <div className="flex justify-center items-center h-full">
                <ClipLoader color="lightblue" size={80} />
            </div>
        )
    }

  return (
    <>
    <Header label={fetchedUser?.name} showBackArrow />
    <UserHero userId={userId as string} />
    <UserBio userId={userId as string} />
    <PostFeed userId={userId as string} />
    </>
  )
}

export default UserView;