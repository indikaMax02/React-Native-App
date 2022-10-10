import React, { useState , useRef } from 'react';
import {BASE_URL} from "@env"


import {View ,ScrollView,Image,Animated,StyleSheet } from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {NativeBaseProvider,Box,Button,Flex,VStack,Center,HStack, TextArea,Input,Text,Alert} from "native-base"
import DashBoard from './DashBoard';
import CustomeAlert from '../components/alerts/CustomAlert';





function DetailsAddPage(){
    const[change,setChage]=useState(false);
    const[image,setImage]=useState(null);
    const[title,setTitle]=useState('');
    const[desc,setDesc]=useState('');
    const[form,setForm]=useState(null);

    const timeDelay=()=>{
         setChage(false);
    }

     const openCamera=()=>{
         const options={
              storageOptions : {
                 path : 'images',
                 mediaType : 'photo',

              },
              includeBase64 : true,
         }   
         launchCamera(options , response=>{
               
                if(response.didCancel){
                   console.log("user cancelld image picker");
                }else{
                  let source = {
                     uri: 'data:image/jpeg;base64,' + response.assets[0].base64
                 };
                    setImage(source)
                }
         });
     
        }

        const openGalary=async()=>{
          const options={
                  title : 'Select Image',
                  type : 'library',
                  options : {
                     selectionLimit : 1,
                     mediaType : 'photo',
                     includeBase64 : false,
                  },
 
               }
             const images= await launchImageLibrary(options);
             setImage(images.assets[0].uri)
             console.log(images.assets[0].uri)
             const formdata=new FormData();
             formdata.append('body',{
              uri : images.assets[0].uri,
              type : images.assets[0].type,
              name : images.assets[0].fileName
             })
          
             formdata.append("title", "hello gm all i am indika");
             formdata.append("desc", "hello");
            
             var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };
            
            fetch(`${BASE_URL}`+'/manage/addDetails', requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
             
            
        
            //  let res = await fetch(
            //   `${BASE_URL}`+'/manage',
            //    {
            //      method: 'post',
            //      headers: {
            //       'Content-Type': 'multipart/form-data; ',
            //     },
            //      body: form
                
            //    }
            //  );
            //  let responseJson = await res.json();
            //  if (responseJson.status == 1) {
            //    alert('Upload Successful');
            //  }
          // launchImageLibrary(options , response=>{
                
          //        if(response.didCancel){
          //           console.log("user cancelld image picker");
          //        }else{
          //          let source = {
          //             uri: 'data:image/jpeg;base64,' + response.assets[0].base64
          //         };
          //            setImage(source)
          //        }
          // });
      
         }



    return(
       


        <NativeBaseProvider>

           
<Box flex={1} mt='3' flexDirection='column'  rounded="xl"  safeArea>
                 
<ScrollView>
                 

                 <Box height='30%' width="100%"   flexDirection='row' alignItems='center' justifyContent='space-around'>

                   <Box height='40' flexDirection='column' justifyContent='space-around'>
                                <Button
                                   onPress={async()=>{
                                    openCamera();
                                   
                                    

                                   }}
                                >Open Camera</Button>

                                <Button 
                                   color="green.500"
                                  onPress={()=>{
                                    openGalary();
                                  }}
                                 
                                >open Galary</Button>
                   </Box>

                 <Box bg='white' rounded='xl' height='100%' width='60%' alignItems='center'>
                    
                       
                           <Image 
                        
                          source={{uri:image}}
                           style={{
                          overflow : 'hidden',
                            height : '100%',
                            width : '100%',
                            borderRadius: 10,
                          //  borderWidth : 2,
                          //  borderColor : 'blue'
                            
                           }}
                           
                           />

                    
                     </Box>
                 </Box>

                 
                 <Box mt='10' height='30%' width="100%"   flexDirection='row' alignItems='center' justifyContent='center'>

                 <Box bg='white'   rounded='xl' height='90%' width='90%' alignItems='center' justifyContent='space-around'>
                    
                 <Input


                                      onChangeText={text => setTitle(text)}
                                      value={title}
                                  
                                                
                                                
                                    mb='4' shadow={2} _light={{
                                    bg: "coolGray.100",
                                    _hover: {
                                      bg: "coolGray.200"
                                    },
                                    _focus: {
                                      bg: "coolGray.200:alpha.70"
                                    }
                                  }} _dark={{
                                    bg: "coolGray.800",
                                    _hover: {
                                      bg: "coolGray.900"
                                    },
                                    _focus: {
                                      bg: "coolGray.900:alpha.70"
                                    }
  }} placeholder="Title" />
                 <TextArea  
                 onChangeText={desc => setDesc(desc)}
                 value={desc}
                 width='100%' height='100%' placeholder="Text Area Placeholder" />

                     </Box>
                 </Box>


               

                 <Box height='40' flexDirection='column' alignItems='center'  >
                                <Button width='60%' mb='4' mt='4'


                            
                                onPress={async()=>{
                                  

                                }}
                                
                                >Save Details</Button>
                                <Button width='60%' bg='red.500' onPress={()=>{
                                   console.log(Environment.BASE_URL)
                                }}>Add Image</Button>
                   </Box>
                   </ScrollView>

                 
      
       <CustomeAlert 
          bgcolor={"black"}
          isAnimate={change}
          text="Details Addedd Completed"
       />

              


             
                  

     </Box>
            
        </NativeBaseProvider>

    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default DetailsAddPage

