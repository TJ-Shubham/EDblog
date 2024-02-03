import { useForm } from "react-hook-form"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiPost from "../services/apiPost"
import Input from "../ui/Input";
import { useCallback, useEffect } from "react";
import RealTimeEditor from "../ui/RealTimeEditor";
import Button from "../ui/Button";


export default function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title: post?.title || "",
            content: post?.content || "",
            id: post?.$id || "",
            favouritePost: post?.favouritePost || false,
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async(data) => {
        if(post){
            const file = data.image[0] && await apiPost.uploadFile(data.image[0]);

            if(file) apiPost.deleteFile(post.postImage);

            const dbPost = await apiPost.updatePost(post.$id, {...data, postImage: file && file.$id});

            if(dbPost) navigate(`/post/${dbPost.$id}`);
        }else{
            const file = await apiPost.uploadFile(data.image[0]);

            if(file){
                const fileId = file.$id;
                data.postImage = fileId;
                const dbPost = await apiPost.createPost({...data, userId: userData.$id});
                if(dbPost) navigate(`/post/${dbPost.$id}`);
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("id", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input 
                label="Title"
                placeholder="Title"
                className="mb-4"
                {...register("title", {required: true})}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            <RealTimeEditor label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Post Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img src={apiPost.getFilePreview(post.postImage)} alt={post.title} className="rounded-lg" />
                </div>
            )}
            <Button type="submit" bgColor={post && "bg-green-500"} className="w-full" >{post ? "update" : "Submit"}</Button>
        </div>
    </form>
  )
}
