/**
 * Created: Anderson Xavier,
 * Date: 19/06/2019,
 * Follow: @andersonx. 
 * Desafio: Rocketseat
 */

import { Platform, PixelRatio } from 'react-native';

// Função para inserir um enquadramento quando reduzir o mapa.
export function getPixelSize(pixels) {
    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels),
    });
}