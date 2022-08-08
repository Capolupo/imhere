import React, {useState} from 'react';

import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import {styles} from './styles';
import {Participant} from '../../components/Participant';

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');
  
  function handleParticipantAdd(){
    // console.log("você clicou no botao adicionar")
    if (participantName === ""){
      return Alert.alert("Participante em branco","Não será possivel incluir um nome em branco, nulo ou vazio.");
    }
    if (participants.includes(participantName)){
      return Alert.alert("Participante Existe","Já Existe um participante na lista com este nome.");
    }
    // participants.push('Ana');
    setParticipants(prevState=>[...prevState,participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name:string){
    // console.log(`você clicou no botao remover ${name}`)

    // O Return abaixo me retorna o nome de todos os participantes MENOS o selecionado
    //return console.log(participants.filter(participant => participant !== name))     

    
    Alert.alert("Remover",`Deseja remover o participante ${name}?`,[
      {
        text:'Sim',
        onPress:() => setParticipants(previState => previState.filter(participant => participant !== name))
        //Deletado Alert.alert("Deletado!")
      },
      {
        text:'Não',
        style:'cancel'
      },      
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento - Aniversário</Text>
      <Text style={styles.eventDate}>Data do Evento - 29/03/2023</Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"  
          onChangeText={textoDigitadoNoEdit => setParticipantName(textoDigitadoNoEdit) } 
          value={participantName}     
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>        
        </TouchableOpacity> 
      </View>  

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=>(          
            <Participant
              key={item} 
              name={item} 
              onRemove={() => handleParticipantRemove(item)}
            />           
        )}
        
        showsVerticalScrollIndicator={false}
        
        ListEmptyComponent={() =>(
          <Text style={styles.listEmptyText}>
            Esta lista esta vazia, confirme se deveria aparecer algo ou inicie o cadastro de itens.
          </Text>
        )}
      />

      {/*
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant =>(
          <Participant
            key={participant} 
            name={participant} 
            onRemove={() => handleParticipantRemove("qqqndre")}/>
        ) )
      }
       */}
      {/*<Participant name="qqqqe" onRemove={() => handleParticipantRemove("qqqndre")}/>*/}      
      {/* <Participant name="Sergio"/> */}

      {/* </ScrollView> */}
      
    </View>
  );
}