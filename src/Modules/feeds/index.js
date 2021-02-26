import React from 'react';
import { TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import Card from '../../Components/Card';
import { spV, spH } from "../../Styles/normalize";

const styles = StyleSheet.create({
    container: {
        marginVertical: spV(16),
        marginHorizontal: spH(16),
    }
})

const dummyData = [
    {
        title: 'Breakfast', subTitle: 'Start your day right', image: require('../../../assets/test1.png'), subItems: [{ title: 'Pancakes', subTitle: '2 people . 10 minutes', image: require('../../../assets/test1.png') },
        { title: 'Waffels', subTitle: '6 people . 20 minutes', image: require('../../../assets/test2.png') }, { title: 'Soup', subTitle: '2 people . 15 minutes', image: require('../../../assets/test3.png') }]
    },
    {
        title: 'Vegetarian', subTitle: 'Power Vegetable', image: require('../../../assets/test2.png'), subItems: [{ title: 'Idly', subTitle: '2 people . 15 minutes', image: require('../../../assets/test3.png') },
        { title: 'Dosa', subTitle: '2 people . 10 minutes', image: require('../../../assets/test1.png') }, { title: 'Test Food', subTitle: '2 people . 10 minutes', image: require('../../../assets/test1.png') }]
    },
    {
        title: 'Test', subTitle: 'Testing User Interface', image: require('../../../assets/test3.png'), subItems: [{ title: 'Scrambled Eggs', subTitle: '6 people . 20 minutes', image: require('../../../assets/test2.png') },
        { title: 'Soup', subTitle: '2 people . 15 minutes', image: require('../../../assets/test3.png') }, { title: 'Dosa', subTitle: '2 people . 10 minutes', image: require('../../../assets/test1.png') }, { title: 'Idly', subTitle: '2 people . 15 minutes', image: require('../../../assets/test3.png') }]
    }
]

function FeedScreen(props) {

    const { navigation } = props;
    const renderContent = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() => navigation && navigation.navigate('Details', { item: item.subItems })} >
                <Card
                    title={item.title}
                    subTitle={item.subTitle}
                    imageUrl={item.image}
                    viewType={'category'}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={dummyData}
                renderItem={renderContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default FeedScreen;