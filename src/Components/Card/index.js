import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {wp, hp, fp, spH, spV} from '../../Styles/normalize';

export const getCardStylesByViewType = (styles, viewType) => {
    return viewType ? styles[viewType] : {};
  };

  export const viewStyles = {
    ['category']: {
      Card: {
        width: wp(343),
        height: hp(280),
      },
    },
    ['subCategory']: {
      Card: {
        width: wp(343),
        height: hp(160),
      },
    },
  };
  

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 6,
        backgroundColor: 'grey',
        marginBottom: spV(16),
    },
    subtitle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: fp(16),
        marginLeft: spH(16),
        marginTop: spV(16)
    },

    title: {
        color: '#fff',
        fontSize: fp(28),
        marginLeft: spH(16),
        marginTop: spV(16)
    }

})


const Card = (props) => {

    const stylesByView = getCardStylesByViewType(viewStyles, props.viewType).Card;
    const cardStyle = { ...stylesByView, ...styles.cardContainer};

    return (
        <ImageBackground source={props.imageUrl} style={cardStyle}>
            {props.viewType === 'category' ? (<View>
                <Text style={styles.subtitle}>
                    {props.subTitle.toUpperCase()}
                </Text>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>) : 
            (<View style={{flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={{...styles.subtitle, color: '#fff', marginBottom: spV(16)}}>
                    {props.subTitle}
                </Text>
            </View>)}
        </ImageBackground>
    )
}

export default Card;

