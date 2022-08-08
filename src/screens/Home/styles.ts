import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
     flex:1 ,
     backgroundColor: '#131016',
     padding:30 
    },
    eventName:{
     color:'#FFF' ,
     fontSize: 24,
     marginTop:28,
     fontWeight: 'bold',
   },
   eventDate:{
     color:'#FDFCFE' ,
     fontSize: 16,
     marginTop:8,
     fontWeight: 'bold',
   },
   input:{
    flex:1 ,
     height: 56 ,
     backgroundColor: '#1F1E25',
     borderRadius: 10,
     color : '#FFF' ,
     padding: 16,
     fontSize: 16 ,
     marginRight:12
   } ,
   buttonText:{
    color:'#FFF' ,
    fontSize:24
   },
   button:{
    width:56 ,
    height:56,
    borderRadius:5,
    backgroundColor:'#31CF67',
    alignItems: 'center',
    justifyContent: 'center',    
   },
   form:{
    width:'100%' ,
    flexDirection:'row' ,
    marginTop:36,
    marginBottom:42  
   },
   listEmptyText:{
    color : '#FFF',
    textAlign:'center',
    fontSize:14,     
   }
  });