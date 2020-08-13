import React from 'react';
import { ScrollView, View,StyleSheet,Text } from 'react-native';
import {Header,ListItem} from 'react-native-elements'
import NestedListView, {NestedRow} from 'react-native-nested-listview'
import * as firebase from 'firebase'

class TopicsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //listCost:[],
      listData:[],
      checkCount: 0,
    }
  }

  selectNodeStyle(level){

    if(level == 1) 
      return styles.mainNode
    else
      return styles.subNode
  }

  
  render() {

    const { params } = this.props.navigation.state;
    const topics = params ? params.topics : null;
    const exercises = params ? params.exercises : null;
    const subModuleName = params ? params.subModuleName : null;

    let theoryData = null
    let exercisesData = null

    //Se o submódulo contem teoria ('subModuleTopics' no array de infos),
    //gera um array de dados para ser interpretado pelo <NestedListView>
    //contendo os dados da parte teórica
    if(topics != null){
      theoryData = topics.map((topic, index) => {

        let topicItems = []
        if(topic.topicTheory)
          topicItems.push({title: 'Theory',
                              id: index,
                              type: 1})
        if(topic.topicExercises)
          topicItems.push({title: 'Activities',
                              id: index,
                              type: 2})

        if(topicItems.length == 0)
          topicItems.push({title: 'No content yet',
                              id: index,
                              type: 3})

        return ({title: topic.topicName, 
                type: 0,
                items: topicItems,
        })
      })
    }

    //Se o submódulo contem exercícios gerais ('subModuleExercises' no array de infos)
    //gera um array de dados para ser interpretado pelo <NestedListView>
    //contendo os dados da parte de atividades
    if(exercises != null){
      exercisesData = [{title: 'Activities'}]
    }
    
   
    //Este é um exemplo de um array estático que
    //pode ser usado na 'NestedListView'. É bom para
    //referência, se necessário.
    //
    //Cada nó é representado por um objeto, que contem um 'title'.
    //Cada objeto pode ter também quantas propriedades o dev quiser.
    //Uma dessas propriedades pode ser usada como um array de objetos,
    //que representam, por sua vez, nós filhos. É necessário informar
    //o nome da propriedade que contem o array para o componente
    //<NestedListView>, através do prop 'getChildrenName'
    
    let EXEMPLO_DE_ARRAY = [{title: '✓  Introduction', 
                    items: [{title: 'Introdutory video', id: 1}, 
                    {title: 'Content overall', id: 2},
                    {title: 'Activities', id: 3}]},
                  {title: 'Estimating', 
                    items: [{title: 'Types of Costs', id: 4}, 
                    {title: 'Inputs', id: 5},
                    {title: 'Tools and Techniques', id: 6},
                    {title: 'Outputs', id: 7},
                    {title: 'Activities', id: 8}]},
                  ]


    //Se o submódulo contem teoria ('subModuleTopics' no array de infos),
    //a variavel 'theory' recebe uma <NestedListView> com os dados extraidos
    //de 'theoryData'.
    //Se não, 'theory' recebe um <Text> dizendo que não há dados
    if(topics != null){

      theory = (<NestedListView
        data={theoryData}
        getChildrenName={(node) => 'items'}
        onNodePressed={(node) => {

          //Se o subtopico clicado é do tipo 'Theory', vai para a tela
          //de teoria
          if(node.type == 1)
          {
            this.props.navigation.navigate('TopicSwiper', {
              topicTheory:topics[node.id].topicTheory,
              topicName:topics[node.id].topicName
            });
          }
          //Se o subtopico clicado é do tipo 'Activities', vai para a tela
          //de atividades
          else if(node.type == 2)
          {
            this.props.navigation.navigate('Exercises', {
              topicExercises:topics[node.id].topicExercises,
              topicName:topics[node.id].topicName
            });
          }
        }}
        renderNode={(node, level) => (
          <NestedRow
            level={level}
            style={this.selectNodeStyle(level)}
          >
            <Text>{node.title}</Text>
          </NestedRow>
        )}
      />)
    }
    else
      theory = (<Text style={styles.noNodeText}>No theory content yet for this module</Text>)



    //Se o submódulo contem exercícios gerais ('subModuleExercises' no array de infos)
    //a variavel 'exercises' recebe uma <NestedListView> com os dados extraidos
    //de 'exercisesData'.
    //Se não, 'exercises' recebe um <Text> dizendo que não há dados
    if(exercises != null){
      practice = (<NestedListView
        data={exercisesData}
        getChildrenName={(node) => 'items'}
        onNodePressed={(node) => {

          this.props.navigation.navigate('Exercises', {
            topicExercises:exercises,
            topicName:subModuleName + ' Activities'
          });
        }}

        renderNode={(node, level) => (
          <NestedRow
            level={level}
            style={this.selectNodeStyle(level)}
          >
            <Text>{node.title}</Text>
          </NestedRow>
        )}
      />)
    }
    else
      practice = (<Text style={styles.noNodeText}>No exercises for this module</Text>)



//RENDER------------------------------------------------------
    return (
      <ScrollView >
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("SubModules"),
          }}
          centerComponent={{ text: subModuleName + ' Topics', style: { color: '#fff' } }}
        />
        {theory}
        <Header
          backgroundColor = '#1e272e'
          centerComponent={{ text: subModuleName + ' General Exercises', style: { color: '#fff' } }}
        />
        {practice}
      </ScrollView>
    );
  }
}
export default TopicsList;

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  mainNode: {
    backgroundColor: '#DCDCDC',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    fontSize: 7.5,
    padding: 15,
  },

  subNode: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    fontSize: 7.5,
    padding: 15,
  },

  noNodeText: {
    margin: 5,
    fontSize: 25,
    textAlign: "center"
  }
});