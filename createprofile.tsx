//you will import files on yourself

interface Props{
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile =({user, btnTitle} :Props) =>{
  const router = useRouter();
  const pathname = usePathnamw();
  const { startUpload } = useUploadingThing("media");

  const [files, setFiles] = useState<File[]><[]>;

  const from = useForm<z.infer<typeof UseValidation>>({
    resolver: zodResolver(UseValidation),
    defaultValue: {
      profile_photo: user?.image ? user.image :"",
      name: user ?.name ? user.name : "",
      username: user?.username ? user.username : "",
      bio: user?.bio ? user.bio :"",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>)=> {
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(biob);

    if(hasImageChanged){
      const imgRes = await startUpload(files);

      if(imgRas && imgRes[0].fileUrl){
        values.profile_photo = imgRes[0].fileUrl;
      }
    }
    await updateUser({
      name: values.name,
      username: values.username,
      userId: user.id,
      bio: values.profile_photo,
    });

    if(pathname == "/profile/edit"){
      router.back();
    }else {
      router.push("/");
    }
  };
   const handleImage =(
     e:ChangeEvent<HTML.InputElements>,
     fieldChange: (value:string) => void
     ) =>{
       e.preventDefault();

       const fileReader = new FileReader();

       if(e.target.files && e.target.files.length > 0){
         const file = e.target.files[0];
         setFiles(Array.from)e.target.files)));


         if(!file.type.includes
       
