import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { RedTitleComponent } from "../../components/RedTitleComponent";
import Style from "./style";
import { Props } from "./types";
import { FilmCardWithTitleComponent } from "../../components/FilmCardWithTitleComponent";
import { LinkComponent } from "../../components/LinkComponent";
import { BackHeaderComponent } from "../../components/BackHeaderComponent";

export function DetailScreen({ navigation, route }: Props) {

    const data = route.params.data;


    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <Image
                source={{ uri: data.thumbnail.path + '/detail.' + data.thumbnail.extension }}
                style={Style.image}
            />
            <BackHeaderComponent />
            <View style={Style.content}>
                <RedTitleComponent text={'NAME'} containerStyle={{ marginTop: 10 }} />
                <Text style={Style.text}>{data.name}</Text>
                <RedTitleComponent text={'DESCRIPTION'} containerStyle={{ marginTop: 10 }} />
                <Text style={Style.text}>{data.description ? data.description : 'NO DESCRIPTION'}</Text>
                <FilmCardWithTitleComponent data={data.comics.items} text='COMICS' />
                <FilmCardWithTitleComponent data={data.series.items} text='SERIES' />
                <FilmCardWithTitleComponent data={data.stories.items} text='STORIES' />
                <FilmCardWithTitleComponent data={data.events.items} text='EVENTS' />
                <RedTitleComponent text={'RELATED LINKS'} containerStyle={{ marginTop: 10 }} />
                <LinkComponent text='Detail' containerStyle={{ marginTop: 15 }}/>
                <LinkComponent text='Wiki' containerStyle={{ marginTop: 15 }}/>
                <LinkComponent text='Comiclink' containerStyle={{ marginTop: 15 }}/>
            </View>
        </ScrollView>
    )
}