import React from 'react';
import { View, Button } from 'react-native';
import { ButtonText } from '../../componentes/Button/styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Button title="sair" onPress={signOut} />
        </View>
    );
};

export default Dashboard;
