import React from "react";
import store from "../../store/store"
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";
import { View } from "@ant-design/react-native";

function LoadingComponent(props: any) {
    return (
        props.loading &&
        <View style={{ height: '100%', justifyContent: "center", backgroundColor: "#00000050" }}>
            <ActivityIndicator size={"large"} />
        </View>
    )
}

const mapStateToProps = () => {
    return {
        loading: store.getState().setLoading
    };
};

const mapDispatchToProps = () => {
    return {}
};

export const Loading = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingComponent);
