import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeEscolar() {
    const navigation = useNavigation();

    const [tab, setTab] = useState("notas");

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.titulo}>Portal Escolar</Text>

                <TouchableOpacity 
                    style={styles.perfilBtn}
                    onPress={() => navigation.navigate("perfil")}
                >
                    <Ionicons name="person-circle-outline" size={35} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Botões de navegação interna (useState) */}
            <View style={styles.tabs}>
                <TouchableOpacity 
                    style={[styles.tab, tab === "notas" && styles.tabAtiva]}
                    onPress={() => setTab("notas")}
                >
                    <Text style={styles.tabTexto}>Notas</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.tab, tab === "faltas" && styles.tabAtiva]}
                    onPress={() => setTab("faltas")}
                >
                    <Text style={styles.tabTexto}>Faltas</Text>
                </TouchableOpacity>
            </View>

            {/* Conteúdo Dinâmico */}
            <View style={styles.conteudo}>
                {tab === "notas" ? (
                    <View style={styles.caixa}>
                        <Text style={styles.caixaTitulo}>Minhas Notas</Text>
                        <Text style={styles.item}>Matemática: 8.5</Text>
                        <Text style={styles.item}>Programação: 9.0</Text>
                        <Text style={styles.item}>Banco de Dados: 7.8</Text>
                    </View>
                ) : (
                    <View style={styles.caixa}>
                        <Text style={styles.caixaTitulo}>Minhas Faltas</Text>
                        <Text style={styles.item}>Matemática: 2</Text>
                        <Text style={styles.item}>Programação: 0</Text>
                        <Text style={styles.item}>Banco de Dados: 1</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f8"
    },
    header: {
        backgroundColor: "#263fa9",
        paddingTop: 50,
        paddingBottom: 25,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    titulo: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold"
    },
    perfilBtn: {
        padding: 5
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        paddingHorizontal: 20
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 20,
        backgroundColor: "#dddddd"
    },
    tabAtiva: {
        backgroundColor: "#263fa9"
    },
    tabTexto: {
        color: "#000",
        fontWeight: "bold"
    },
    conteudo: {
        padding: 20
    },
    caixa: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        elevation: 3
    },
    caixaTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15
    },
    item: {
        fontSize: 16,
        marginBottom: 8
    }
});