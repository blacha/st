import {
    AllianceId,
    AllianceName,
    CityId,
    FactionType,
    PlayerId,
    PlayerNameDisplay,
    PlayerScore,
} from '@cncta/clientlib';
import { BaseLocationPacker } from '@cncta/util';
import * as o from 'ospec';
import 'source-map-support/register';
import { WorldData } from '../world.data';

o.spec('WorldDecoder', () => {
    let decoder: WorldData;
    o.beforeEach(() => {
        decoder = new WorldData();
    });

    o('should decode a player city', () => {
        decoder.add({
            a: ['BA6B-f$kL-Red Cherry Hunters'],
            p: ['DA;H-[Nu-MAArco_-7x'],
            d: ['EV$$FRA|Q|F-JB-JB-!m[E-qT[E-6B-Custer'],
            i: 4365,
            v: 3228,
        });

        const cities = decoder.cities.get(712 as CityId);
        if (cities == null) throw new Error('Invalid city');
        o(cities.size).equals(1);
        const city = cities.get(3686816);
        if (city == null) throw new Error('Invalid city');
        o(city.id).equals(3686816);
        o(city.x).equals(443);
        o(city.y).equals(571);
        o(city.name).equals('Custer');
        o(city.level).equals(25);
    });

    o('should decode a npc base', () => {
        decoder.add({ d: ['yZ0gJBJB-JB--bhC-'], i: 0, v: 0 });
        const location = BaseLocationPacker.pack(21, 8);

        const expectedOutput = {
            level: 27.89,
            id: 19592,
            healthBase: 100,
            healthDefense: 100,
        };
        const output = decoder.objects.get(location);
        if (output == null || output.type != 'base') throw new Error('Invalid object');
        o(output.id).equals(expectedOutput.id);
        o(output.level).equals(expectedOutput.level);
        o(output.healthBase).equals(expectedOutput.healthBase);
        o(output.healthDefense).equals(expectedOutput.healthDefense);
    });

    o('should decode a player', () => {
        decoder.add({ a: ['BA6B-f$kL-Red Cherry Hunters'], p: ['DA;H-[Nu-MAArco_-7x'], i: 0, v: 0 });
        o(decoder.players.get(712 as PlayerId)).deepEquals({
            id: 712 as PlayerId,
            allianceId: 149 as AllianceId,
            points: 382190 as PlayerScore,
            name: 'Arco_-7x' as PlayerNameDisplay,
            faction: FactionType.Nod,
        });
    });

    o('should decode an alliance', () => {
        decoder.add({ a: ['BA6B-f$kL-Red Cherry Hunters'], i: 0, v: 0 });
        o(decoder.alliances.get(149 as AllianceId)).deepEquals({
            id: 149 as AllianceId,
            points: 8593252,
            name: 'Red Cherry Hunters' as AllianceName,
            players: [],
        });
    });
});
