//you will import nextjs typescript module and external files  on your own

interface Props {
  threaded: string;
  currentUserImg: string;
  currentId: string;
}

function Comment ({ threadId, currentUserImg, currentUserId }: Props) {
  const Pathname = userPathname();

const form = useForm <z.infer<typeof CommentValidation>> ({
  resolver: zodResolver(CommentValidation),
  defaultValues: {
    thread: "",
  },
});

const onSubmit = async (values: z-infer<typeof CommentValidation>) => {
  await addCommentToThread(
    threadId,
    values.thread,
    JSON.parse(currentUserId),
    pathname
    );

  form.reset();
};

return(
  <Form (...form}>
<form className ='comment-form' onSubmit =onSubmit ={form.handleSubmit(onSubmit)}> 
  <FormField
    control={form.control}
    name = 'thread'
    render ={({ field })
 => (
   <FormItem className ='flex w-full items-center gap-3>
     <FormLabel>
     <Image
       src ={currentUserImg}
       alt ='current_User'
       width={48}
       height={48}
       className='no-focus text-light-1 outline-none'
     />
   </FormLabel>

   <FormControl className='border-none bg-transparent'>
     <Input
       type='text'
       {...field}
       placeholder='Comment...'
       className='no-focus text-light-1 outline-none'
   />
   </FormControl>
     </FormItem> 
   )}
  />

  <Button type='submit' className='comment-form_btn'>
    Reply
    </Button>
  </form>
         </Form>
         );
}

export default Comment;
