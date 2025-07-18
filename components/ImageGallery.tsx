import { View, Image, TouchableOpacity, Linking, ImageSourcePropType } from 'react-native';
import { extractDomainFromUrl } from '../utils/urlValidationUtils';
import { ReactElement } from 'react';

export type URL = `https:${string}`;
type StoreLogo = {
    source: ImageSourcePropType;
    url: URL;
}

export const storeLogos: readonly StoreLogo[] = [
    { source: require('../public/img/LogosMarcas/Asos.jpg'), url: 'https://www.asos.com' },
    { source: require('../public/img/LogosMarcas/Bstn.png'), url: 'https://www.bstn.com' },
    { source: require('../public/img/LogosMarcas/Bohooman.jpg'), url: 'https://www.boohoo.com' },
    { source: require('../public/img/LogosMarcas/Amazon.webp'), url: 'https://www.amazon.com' },
    { source: require('../public/img/LogosMarcas/Zara.webp'), url: 'https://www.zara.com' },
    { source: require('../public/img/LogosMarcas/PcComponentes.webp'), url: 'https://www.pccomponentes.com' },
    { source: require('../public/img/LogosMarcas/Svd.webp'), url: 'https://www.sivasdescalzo.com' },
    { source: require('../public/img/LogosMarcas/Carrefour.webp'), url: 'https://www.carrefour.com' },
    { source: require('../public/img/LogosMarcas/MediaMarkt.png'), url: 'https://www.mediamarkt.es' },
    { source: require('../public/img/LogosMarcas/ElCorteIngles.png'), url: 'https://www.elcorteingles.es' },
];

export const allowedDomains: (string | null)[]  = storeLogos.map(logo => extractDomainFromUrl(logo.url));

const ImageGallery = (): ReactElement => {
    const openUrl = (url: URL): void => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    const renderImage = (logo : StoreLogo, index : number): ReactElement => (
        <TouchableOpacity key={index} onPress={() => openUrl(logo.url)}>
            <Image source={logo.source} className="w-28 h-28 rounded-3xl bg-white" />
        </TouchableOpacity>
    );

    return (
        <View className="mt-4 w-full flex-row justify-center space-x-3 overflow-hidden">
            <View className="space-y-2">
                {storeLogos.slice(0, 6).map((logo, index) => renderImage(logo, index))}
            </View>
            <View className="space-y-2 -mt-12">
                {storeLogos.slice(6, 10).concat(storeLogos.slice(0, 2)).map((logo, index) => renderImage(logo, index + 6))}
            </View>
            <View className="space-y-2">
                {storeLogos.slice(2, 8).map((logo, index) => renderImage(logo, index + 12))}
            </View>
        </View>
    );
};

export default ImageGallery;