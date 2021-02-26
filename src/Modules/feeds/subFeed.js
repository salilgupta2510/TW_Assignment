import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Card from '../../Components/Card';
import {spV, spH} from "../../Styles/normalize";

const styles = StyleSheet.create({
    container: {
        marginVertical: spV(16),
        marginHorizontal: spH(16),
    }
})

function SubFeed(props) {
    console.log('props1',props)
    return (
        <View style={styles.container}>
            <FlatList 
                data={props.route.params.item}
                renderItem={({item, index}) => <Card 
                    key={index} 
                    title={item.title} 
                    subTitle={item.subTitle} 
                    imageUrl={item.image}
                    viewType={'subCategory'}
                    />}
            />
        </View>
    );
  }

  export default SubFeed;