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
    const[imageDetails,setImageDetails]=useState(null)

    const timeDelay=()=>{
         setChage(false);
    }

     const openCamera=async()=>{



  //     const options={
  //       // title : 'Select Image',
  //       // type : 'library',
  //       options : {
  //          selectionLimit : 1,
  //          mediaType : 'photo',
  //          includeBase64 : false,
  //       },

  //    }
  //  const images= await launchCamera(options);
  
  //  setImage(images.assets[0].uri)
  //  setImageDetails(images)


  //   }








         const options={
              storageOptions : {
                 path : 'images',
                 mediaType : 'photo',

              },
              includeBase64 : false,
         }   
         launchCamera(options , response=>{
               
                if(response.didCancel){
                   console.log("user cancelld image picker");
                }else{
                //   let source = {
                //      uri: 'data:image/jpeg;base64,' + response.assets[0].base64
                //  };
                    setImage(response.assets[0].uri)
                    setImageDetails(response)
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
             setImageDetails(images)
        
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
                 

                 <Box height='30%' width="100%" marginTop={10}   flexDirection='row' alignItems='center' justifyContent='space-around'>

                   <Box height='40' flexDirection='column' justifyContent='space-around'>
                                <Button
                                   onPress={async()=>{
                                    openCamera();
                                   
                                    

                                   }}
                                >Open Camera</Button>

                                <Button 
                                   bgColor={'violet.700'}
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
                                <Button width='90%' mb='4' mt='4' bgColor={'green.400'}


                            
                                onPress={async()=>{
                                      
                                      // console.log(images.assets[0].uri)
                                      const formdata=new FormData();
                                      formdata.append('body',{
                                        uri : imageDetails.assets[0].uri,
                                        type : imageDetails.assets[0].type,
                                        name : imageDetails.assets[0].fileName
                                      })
                                    
                                      formdata.append("title", title);
                                      formdata.append("desc", desc);
                                      
                                      var requestOptions = {
                                        method: 'POST',
                                        body: formdata,
                                        redirect: 'follow'
                                      };
                                      
                                      fetch(`${BASE_URL}`+'/manage/addDetails', requestOptions)
                                        .then(response => response.text())
                                        .then(result => {
                                          alert("Details Saved Ok ")
                                          setImage(null);
                                          setImageDetails(null);
                                          setTitle('');
                                          setDesc('');
                                        
                                        })
                                        .catch(error => console.log('error', error));
                                      
                                        

                                }}
                                
                                >Save Details</Button>
                                <Button width='90%' bg='red.500' onPress={()=>{

                              
                                }}>Go to Main Menu</Button>
                   </Box>
                   </ScrollView>

                 
      
       {/* <CustomeAlert 
          bgcolor={"black"}
          isAnimate={change}
          text="Details Addedd Completed"
       /> */}

              


             
                  

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

