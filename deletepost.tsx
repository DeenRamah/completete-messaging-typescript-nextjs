// importing files you will do on your own

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string;
  isComment: string;
}

function DeleteThread ({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {

const pathname = usePathname();
const router = userRouter();

if (currentUserId !== authorId || pathname ==="/") return null;

return(
  <Image
    src='/assets/delete.svg'
    width={18}
    height={18}
    className='cursor-pointer object-contain'
    onClick={async ()+> {
      await deleteThread (JSON.parse(threadId), pathname);
      if(!parentId || !isComment) {
        router.push("/")
      }
}}
/>
);
}
export default DeleteThread;
  
  </Image>
