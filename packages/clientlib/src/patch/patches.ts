export interface PatchObject {
    /** Target function name */
    target: string;
    /** Source function to lookup */
    source: string;
    /** Regexp to find source key */
    re: RegExp;
}

export const PatchData: PatchObject[] = [
    {
        target: 'ClientLib.Data.CityUnits.$DefenseUnits',
        source: 'ClientLib.Data.CityUnits.prototype.HasUnitMdbId',
        re: /for \(var c in \{d:this\.([A-Z]{6})/,
    },
    {
        target: 'ClientLib.Data.CityUnits.$OffenseUnits',
        source: 'ClientLib.Data.CityUnits.prototype.HasUnitMdbId',
        re: /for \(var b in \{d:this\.([A-Z]{6})/,
    },
    {
        target: 'webfrontend.gui.region.RegionCityInfo.$Object',
        source: 'webfrontend.gui.region.RegionCityInfo.prototype.setObject',
        re: /^function \([A-Za-z]+\)\{.+this\.([A-Za-z_]+)=/,
    },
    // NpcCamp
    {
        target: 'ClientLib.Data.WorldSector.WorldObjectNPCCamp.$CampType',
        source: 'ClientLib.Data.WorldSector.WorldObjectNPCCamp.prototype.$ctor',
        re: /this\.([A-Z]{6})=\(*g\>\>(22|0x16)\)/,
    },
    {
        target: 'ClientLib.Data.WorldSector.WorldObjectNPCCamp.$Id',
        source: 'ClientLib.Data.WorldSector.WorldObjectNPCCamp.prototype.$ctor',
        re: /\&.*=-1;\}this\.([A-Z]{6})=\(/,
    },
    {
        target: 'ClientLib.Data.WorldSector.WorldObjectNPCCamp.$Level',
        source: 'ClientLib.Data.WorldSector.WorldObjectNPCCamp.prototype.$ctor',
        re: /\.*this\.([A-Z]{6})=\(\(\(g>>4/,
    },
    // NpcBase
    {
        target: 'ClientLib.Data.WorldSector.WorldObjectNPCBase.$Id',
        source: 'ClientLib.Data.WorldSector.WorldObjectNPCBase.prototype.$ctor',
        re: /.*d\+=f;this\.([A-Z]{6})=\(/,
    },
    {
        target: 'ClientLib.Data.WorldSector.WorldObjectNPCBase.$Level',
        source: 'ClientLib.Data.WorldSector.WorldObjectNPCBase.prototype.$ctor',
        re: /\.*this\.([A-Z]{6})=\(\(\(g>>4/,
    },
    // PlayerCity
    {
        target: 'ClientLib.Data.WorldSector.WorldObjectCity.$PlayerId',
        source: 'ClientLib.Data.WorldSector.WorldObjectCity.prototype.$ctor',
        re: /&0x3ff\);this.([A-Z]{6})/,
    },
    {
        target: 'ClientLib.Data.WorldSector.WorldObjectCity.$AllianceId',
        source: 'ClientLib.Data.WorldSector.WorldObjectCity.prototype.$ctor',
        re: /.*d\+=f;this\.([A-Z]{6})=\(/,
    },
    {
        target: 'ClientLib.Data.WorldSector.WorldObjectCity.$Id',
        source: 'ClientLib.Data.WorldSector.WorldObjectCity.prototype.$ctor',
        re: /.*d\+=f;this\.([A-Z]{6})=\(.*d\+=f.*d\+=/,
    },
];
