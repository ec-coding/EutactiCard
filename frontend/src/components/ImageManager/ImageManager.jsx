import React from 'react'
// ICONS
// SCARLET & VIOLET
import svIcon1 from '../../images/icon/scarlet_violet/scarlet_violet.png';
import svIcon2 from '../../images/icon/scarlet_violet/paldea_evolved.png';
import svIcon3 from '../../images/icon/scarlet_violet/obsidian_flames.png';
import svIcon4 from '../../images/icon/scarlet_violet/sv_151.png';
import svIcon5 from '../../images/icon/scarlet_violet/paradox_rift.png';
import svIcon6 from '../../images/icon/scarlet_violet/paldean_fates.png';
import svIcon7 from '../../images/icon/scarlet_violet/temporal_forces.png';
import svIcon8 from '../../images/icon/scarlet_violet/twilight_masquerade.png';
import svIcon9 from '../../images/icon/scarlet_violet/shrouded_fable.png';
// SWORD & SHIELD
import ssIcon1 from '../../images/icon/sword_shield/sword_shield.png';
import ssIcon2 from '../../images/icon/sword_shield/rebel_clash.png';
import ssIcon3 from '../../images/icon/sword_shield/darkness_ablaze.png';
import ssIcon4 from '../../images/icon/sword_shield/champions_path.png';
import ssIcon5 from '../../images/icon/sword_shield/vivid_voltage.png';
import ssIcon6 from '../../images/icon/sword_shield/shining_fates.png';
import ssIcon7 from '../../images/icon/sword_shield/battle_styles.png';
import ssIcon8 from '../../images/icon/sword_shield/chilling_reign.png';
import ssIcon9 from '../../images/icon/sword_shield/evolving_skies.png';
import ssIcon10 from '../../images/icon/sword_shield/celebrations.png';
import ssIcon11 from '../../images/icon/sword_shield/fusion_strike.png';
import ssIcon12 from '../../images/icon/sword_shield/brilliant_stars.png';
import ssIcon13 from '../../images/icon/sword_shield/astral_radiance.png';
import ssIcon14 from '../../images/icon/sword_shield/pokemon_go.png';
import ssIcon15 from '../../images/icon/sword_shield/lost_origin.png';
import ssIcon16 from '../../images/icon/sword_shield/silver_tempest.png';
import ssIcon17 from '../../images/icon/sword_shield/crown_zenith.png';
// SUN & MOON
import smIcon1 from '../../images/icon/sun_moon/sun_moon.png';
import smIcon2 from '../../images/icon/sun_moon/guardians_rising.png';
import smIcon3 from '../../images/icon/sun_moon/burning_shadows.png';
import smIcon4 from '../../images/icon/sun_moon/shining_legends.png';
import smIcon5 from '../../images/icon/sun_moon/crimson_invasion.png';
import smIcon6 from '../../images/icon/sun_moon/ultra_prism.png';
import smIcon7 from '../../images/icon/sun_moon/forbidden_light.png';
import smIcon8 from '../../images/icon/sun_moon/celestial_storm.png';
import smIcon9 from '../../images/icon/sun_moon/dragon_majesty.png';
import smIcon10 from '../../images/icon/sun_moon/lost_thunder.png';
import smIcon11 from '../../images/icon/sun_moon/team_up.png';
import smIcon12 from '../../images/icon/sun_moon/detective_pikachu.png';
import smIcon13 from '../../images/icon/sun_moon/unbroken_bonds.png';
import smIcon14 from '../../images/icon/sun_moon/unified_minds.png';
import smIcon15 from '../../images/icon/sun_moon/hidden_fates.png';
import smIcon16 from '../../images/icon/sun_moon/cosmic_eclipse.png';
// XY
import xyIcon1 from '../../images/icon/xy/kalos_starter_set.png';
import xyIcon2 from '../../images/icon/xy/xy.png';
import xyIcon3 from '../../images/icon/xy/flashfire.png';
import xyIcon4 from '../../images/icon/xy/furious_fists.png';
import xyIcon5 from '../../images/icon/xy/phantom_forces.png';
import xyIcon6 from '../../images/icon/xy/primal_clash.png';
import xyIcon7 from '../../images/icon/xy/double_crisis.png';
import xyIcon8 from '../../images/icon/xy/roaring_skies.png';
import xyIcon9 from '../../images/icon/xy/ancient_origins.png';
import xyIcon10 from '../../images/icon/xy/breakthrough.png';
import xyIcon11 from '../../images/icon/xy/breakpoint.png';
import xyIcon12 from '../../images/icon/xy/generations.png';
import xyIcon13 from '../../images/icon/xy/fates_collide.png';
import xyIcon14 from '../../images/icon/xy/steam_siege.png';
import xyIcon15 from '../../images/icon/xy/evolutions.png';
// // BLACK & WHITE
import bwIcon1 from '../../images/icon/black_white/black_white.png';
import bwIcon2 from '../../images/icon/black_white/emerging_powers.png';
import bwIcon3 from '../../images/icon/black_white/noble_victories.png';
import bwIcon4 from '../../images/icon/black_white/next_destinies.png';
import bwIcon5 from '../../images/icon/black_white/dark_explorers.png';
import bwIcon6 from '../../images/icon/black_white/dragons_exalted.png';
import bwIcon7 from '../../images/icon/black_white/dragon_vault.png';
import bwIcon8 from '../../images/icon/black_white/boundaries_crossed.png';
import bwIcon9 from '../../images/icon/black_white/plasma_storm.png';
import bwIcon10 from '../../images/icon/black_white/plasma_freeze.png';
import bwIcon11 from '../../images/icon/black_white/plasma_blast.png';
import bwIcon12 from '../../images/icon/black_white/legendary_treasures.png';
// CALL OF LEGENDS
import colIcon1 from '../../images/icon/call_of_legends/call_of_legends.png';
// HEARTGOLD & SOULSILVER
import hgsIcon1 from '../../images/icon/hg-ss/hg_ss.png';
import hgsIcon2 from '../../images/icon/hg-ss/unleashed.png';
import hgsIcon3 from '../../images/icon/hg-ss/undaunted.png';
import hgsIcon4 from '../../images/icon/hg-ss/triumphant.png';
// PLATINUM
import plIcon1 from '../../images/icon/platinum/arceus.png';
import plIcon2 from '../../images/icon/platinum/supreme_victors.png';
import plIcon3 from '../../images/icon/platinum/rising_rivals.png';
import plIcon4 from '../../images/icon/platinum/platinum.png';
// DIAMOND & PEARL
import dpIcon1 from '../../images/icon/diamond_pearl/stormfront.png';
import dpIcon2 from '../../images/icon/diamond_pearl/legends_awakened.png';
import dpIcon3 from '../../images/icon/diamond_pearl/majestic_dawn.png';
import dpIcon4 from '../../images/icon/diamond_pearl/great_encounters.png';
import dpIcon5 from '../../images/icon/diamond_pearl/secret_wonders.png';
import dpIcon6 from '../../images/icon/diamond_pearl/mysterious_treasures.png';
import dpIcon7 from '../../images/icon/diamond_pearl/diamond_pearl.png';
// EX
import exIcon1 from '../../images/icon/ex/ex_power_keepers.png';
import exIcon2 from '../../images/icon/ex/ex_dragon_frontiers.png';
import exIcon3 from '../../images/icon/ex/ex_crystal_guardians.png';
import exIcon4 from '../../images/icon/ex/ex_holon_phantoms.png';
import exIcon5 from '../../images/icon/ex/ex_legend_maker.png';
import exIcon6 from '../../images/icon/ex/ex_delta_species.png';
import exIcon7 from '../../images/icon/ex/ex_unseen_forces.png';
import exIcon8 from '../../images/icon/ex/ex_emerald.png';
import exIcon9 from '../../images/icon/ex/ex_deoxys.png';
import exIcon10 from '../../images/icon/ex/ex_trr.png';
import exIcon11 from '../../images/icon/ex/ex_fr_lg.png';
import exIcon12 from '../../images/icon/ex/ex_hidden_legends.png';
import exIcon13 from '../../images/icon/ex/ex_tm_ta.png';
import exIcon14 from '../../images/icon/ex/ex_dragon.png';
import exIcon15 from '../../images/icon/ex/ex_sandstorm.png';
import exIcon16 from '../../images/icon/ex/ex_ruby_sapphire.png';
// E-CARD
import ecIcon1 from '../../images/icon/e-card/skyridge.png';
import ecIcon2 from '../../images/icon/e-card/aquapolis.png';
import ecIcon3 from '../../images/icon/e-card/expedition_base_set.png';
// LEGENDARY COLLECTION
import lcIcon1 from '../../images/icon/legendary_collection/legendary_collection.png';
// NEO
import neoIcon1 from '../../images/icon/neo/neo_destiny.png';
import neoIcon2 from '../../images/icon/neo/neo_revelation.png';
import neoIcon3 from '../../images/icon/neo/neo_discovery.png';
import neoIcon4 from '../../images/icon/neo/neo_genesis.png';
// ORIGINAL
import orgIcon1 from '../../images/icon/original/gym_challenge.png';
import orgIcon2 from '../../images/icon/original/gym_heroes.png';
import orgIcon3 from '../../images/icon/original/team_rocket.png';
import orgIcon4 from '../../images/icon/original/base_set_2.png';
import orgIcon5 from '../../images/icon/original/fossil.png';
import orgIcon6 from '../../images/icon/original/jungle.png';
import orgIcon7 from '../../images/icon/original/base_set.png';

// LOGOS
// SCARLET & VIOLET
import svLogo1 from '../../images/logo/scarlet_violet/scarlet_violet.png';
import svLogo2 from '../../images/logo/scarlet_violet/paldea_evolved.png';
import svLogo3 from '../../images/logo/scarlet_violet/obsidian_flames.png';
import svLogo4 from '../../images/logo/scarlet_violet/sv_151.png';
import svLogo5 from '../../images/logo/scarlet_violet/paradox_rift.png';
import svLogo6 from '../../images/logo/scarlet_violet/paldean_fates.png';
import svLogo7 from '../../images/logo/scarlet_violet/temporal_forces.png';
import svLogo8 from '../../images/logo/scarlet_violet/twilight_masquerade.png';
import svLogo9 from '../../images/logo/scarlet_violet/shrouded_fable.png';
// SWORD & SHIELD
import ssLogo1 from '../../images/logo/sword_shield/sword_shield.png';
import ssLogo2 from '../../images/logo/sword_shield/rebel_clash.png';
import ssLogo3 from '../../images/logo/sword_shield/darkness_ablaze.png';
import ssLogo4 from '../../images/logo/sword_shield/champions_path.png';
import ssLogo5 from '../../images/logo/sword_shield/vivid_voltage.png';
import ssLogo6 from '../../images/logo/sword_shield/shining_fates.png';
import ssLogo7 from '../../images/logo/sword_shield/battle_styles.png';
import ssLogo8 from '../../images/logo/sword_shield/chilling_reign.png';
import ssLogo9 from '../../images/logo/sword_shield/evolving_skies.png';
import ssLogo10 from '../../images/logo/sword_shield/celebrations.png';
import ssLogo11 from '../../images/logo/sword_shield/fusion_strike.png';
import ssLogo12 from '../../images/logo/sword_shield/brilliant_stars.png';
import ssLogo13 from '../../images/logo/sword_shield/astral_radiance.png';
import ssLogo14 from '../../images/logo/sword_shield/pokemon_go.png';
import ssLogo15 from '../../images/logo/sword_shield/lost_origin.png';
import ssLogo16 from '../../images/logo/sword_shield/silver_tempest.png';
import ssLogo17 from '../../images/logo/sword_shield/crown_zenith.png';
// SUN & MOON
import smLogo1 from '../../images/logo/sun_moon/sun_moon.png';
import smLogo2 from '../../images/logo/sun_moon/guardians_rising.png';
import smLogo3 from '../../images/logo/sun_moon/burning_shadows.png';
import smLogo4 from '../../images/logo/sun_moon/shining_legends.png';
import smLogo5 from '../../images/logo/sun_moon/crimson_invasion.png';
import smLogo6 from '../../images/logo/sun_moon/ultra_prism.png';
import smLogo7 from '../../images/logo/sun_moon/forbidden_light.png';
import smLogo8 from '../../images/logo/sun_moon/celestial_storm.png';
import smLogo9 from '../../images/logo/sun_moon/dragon_majesty.png';
import smLogo10 from '../../images/logo/sun_moon/lost_thunder.png';
import smLogo11 from '../../images/logo/sun_moon/team_up.png';
import smLogo12 from '../../images/logo/sun_moon/detective_pikachu.png';
import smLogo13 from '../../images/logo/sun_moon/unbroken_bonds.png';
import smLogo14 from '../../images/logo/sun_moon/unified_minds.png';
import smLogo15 from '../../images/logo/sun_moon/hidden_fates.png';
import smLogo16 from '../../images/logo/sun_moon/cosmic_eclipse.png';
// XY
import xyLogo1 from '../../images/logo/xy/kalos_starter_set.png';
import xyLogo2 from '../../images/logo/xy/xy.png';
import xyLogo3 from '../../images/logo/xy/flashfire.png';
import xyLogo4 from '../../images/logo/xy/furious_fists.png';
import xyLogo5 from '../../images/logo/xy/phantom_forces.png';
import xyLogo6 from '../../images/logo/xy/primal_clash.png';
import xyLogo7 from '../../images/logo/xy/double_crisis.png';
import xyLogo8 from '../../images/logo/xy/roaring_skies.png';
import xyLogo9 from '../../images/logo/xy/ancient_origins.png';
import xyLogo10 from '../../images/logo/xy/breakthrough.png';
import xyLogo11 from '../../images/logo/xy/breakpoint.png';
import xyLogo12 from '../../images/logo/xy/generations.png';
import xyLogo13 from '../../images/logo/xy/fates_collide.png';
import xyLogo14 from '../../images/logo/xy/steam_siege.png';
import xyLogo15 from '../../images/logo/xy/evolutions.png';
// // BLACK & WHITE
import bwLogo1 from '../../images/logo/black_white/black_white.png';
import bwLogo2 from '../../images/logo/black_white/emerging_powers.png';
import bwLogo3 from '../../images/logo/black_white/noble_victories.png';
import bwLogo4 from '../../images/logo/black_white/next_destinies.png';
import bwLogo5 from '../../images/logo/black_white/dark_explorers.png';
import bwLogo6 from '../../images/logo/black_white/dragons_exalted.png';
import bwLogo7 from '../../images/logo/black_white/dragon_vault.png';
import bwLogo8 from '../../images/logo/black_white/boundaries_crossed.png';
import bwLogo9 from '../../images/logo/black_white/plasma_storm.png';
import bwLogo10 from '../../images/logo/black_white/plasma_freeze.png';
import bwLogo11 from '../../images/logo/black_white/plasma_blast.png';
import bwLogo12 from '../../images/logo/black_white/legendary_treasures.png';
// CALL OF LEGENDS
import colLogo1 from '../../images/logo/call_of_legends/call_of_legends.png';
// HEARTGOLD & SOULSILVER
import hgsLogo1 from '../../images/logo/hg-ss/hg_ss.png';
import hgsLogo2 from '../../images/logo/hg-ss/unleashed.png';
import hgsLogo3 from '../../images/logo/hg-ss/undaunted.png';
import hgsLogo4 from '../../images/logo/hg-ss/triumphant.png';
// PLATINUM
import plLogo1 from '../../images/logo/platinum/arceus.png';
import plLogo2 from '../../images/logo/platinum/supreme_victors.png';
import plLogo3 from '../../images/logo/platinum/rising_rivals.png';
import plLogo4 from '../../images/logo/platinum/platinum.png';
// DIAMOND & PEARL
import dpLogo1 from '../../images/logo/diamond_pearl/stormfront.png';
import dpLogo2 from '../../images/logo/diamond_pearl/legends_awakened.png';
import dpLogo3 from '../../images/logo/diamond_pearl/majestic_dawn.png';
import dpLogo4 from '../../images/logo/diamond_pearl/great_encounters.png';
import dpLogo5 from '../../images/logo/diamond_pearl/secret_wonders.png';
import dpLogo6 from '../../images/logo/diamond_pearl/mysterious_treasures.png';
import dpLogo7 from '../../images/logo/diamond_pearl/diamond_pearl.png';
// EX
import exLogo1 from '../../images/logo/ex/ex_power_keepers.png';
import exLogo2 from '../../images/logo/ex/ex_dragon_frontiers.png';
import exLogo3 from '../../images/logo/ex/ex_crystal_guardians.png';
import exLogo4 from '../../images/logo/ex/ex_holon_phantoms.png';
import exLogo5 from '../../images/logo/ex/ex_legend_maker.png';
import exLogo6 from '../../images/logo/ex/ex_delta_species.png';
import exLogo7 from '../../images/logo/ex/ex_unseen_forces.png';
import exLogo8 from '../../images/logo/ex/ex_emerald.png';
import exLogo9 from '../../images/logo/ex/ex_deoxys.png';
import exLogo10 from '../../images/logo/ex/ex_trr.png';
import exLogo11 from '../../images/logo/ex/ex_fr_lg.png';
import exLogo12 from '../../images/logo/ex/ex_hidden_legends.png';
import exLogo13 from '../../images/logo/ex/ex_tm_ta.png';
import exLogo14 from '../../images/logo/ex/ex_dragon.png';
import exLogo15 from '../../images/logo/ex/ex_sandstorm.png';
import exLogo16 from '../../images/logo/ex/ex_ruby_sapphire.png';
// E-CARD
import ecLogo1 from '../../images/logo/e-card/skyridge.png';
import ecLogo2 from '../../images/logo/e-card/aquapolis.png';
import ecLogo3 from '../../images/logo/e-card/expedition_base_set.png';
// LEGENDARY COLLECTION
import lcLogo1 from '../../images/logo/legendary_collection/legendary_collection.png';
// NEO
import neoLogo1 from '../../images/logo/neo/neo_destiny.png';
import neoLogo2 from '../../images/logo/neo/neo_revelation.png';
import neoLogo3 from '../../images/logo/neo/neo_discovery.png';
import neoLogo4 from '../../images/logo/neo/neo_genesis.png';
// ORIGINAL
import orgLogo1 from '../../images/logo/original/base_set.png';
import orgLogo2 from '../../images/logo/original/jungle.png';
import orgLogo3 from '../../images/logo/original/fossil.png';
import orgLogo4 from '../../images/logo/original/base_set_2.png';
import orgLogo5 from '../../images/logo/original/team_rocket.png';
import orgLogo6 from '../../images/logo/original/gym_heroes.png';
import orgLogo7 from '../../images/logo/original/gym_challenge.png';


const ImageManager = {
    icons:{
        exp14:{
            icon1: svIcon1,
            icon2: svIcon2,
            icon3: svIcon3,
            icon4: svIcon4,
            icon5: svIcon5,
            icon6: svIcon6,
            icon7: svIcon7,
            icon8: svIcon8,
            icon9: svIcon9
        },
        exp13:{
            icon1: ssIcon1,
            icon2: ssIcon2,
            icon3: ssIcon3,
            icon4: ssIcon4,
            icon5: ssIcon5,
            icon6: ssIcon6,
            icon7: ssIcon7,
            icon8: ssIcon8,
            icon9: ssIcon9,
            icon10: ssIcon10,
            icon11: ssIcon11,
            icon12: ssIcon12,
            icon13: ssIcon13,
            icon14: ssIcon14,
            icon15: ssIcon15,
            icon16: ssIcon16,
            icon17: ssIcon17
        },
        exp12:{
            icon1: smIcon1,
            icon2: smIcon2,
            icon3: smIcon3,
            icon4: smIcon4,
            icon5: smIcon5,
            icon6: smIcon6,
            icon7: smIcon7,
            icon8: smIcon8,
            icon9: smIcon9,
            icon10: smIcon10,
            icon11: smIcon11,
            icon12: smIcon12,
            icon13: smIcon13,
            icon14: smIcon14,
            icon15: smIcon15,
            icon16: smIcon16
        },
        exp11:{
            icon1: xyIcon1,
            icon2: xyIcon2,
            icon3: xyIcon3,
            icon4: xyIcon4,
            icon5: xyIcon5,
            icon6: xyIcon6,
            icon7: xyIcon7,
            icon8: xyIcon8,
            icon9: xyIcon9,
            icon10: xyIcon10,
            icon11: xyIcon11,
            icon12: xyIcon12,
            icon13: xyIcon13,
            icon14: xyIcon14,
            icon15: xyIcon15
        },
        exp10:{
            icon1: bwIcon1,
            icon2: bwIcon2,
            icon3: bwIcon3,
            icon4: bwIcon4,
            icon5: bwIcon5,
            icon6: bwIcon6,
            icon7: bwIcon7,
            icon8: bwIcon8,
            icon9: bwIcon9,
            icon10: bwIcon10,
            icon11: bwIcon11,
            icon12: bwIcon12
        },
        exp9:{
            icon1: colIcon1
        },
        exp8:{
            icon1: hgsIcon1,
            icon2: hgsIcon2,
            icon3: hgsIcon3,
            icon4: hgsIcon4
        },
        exp7:{
            icon1: plIcon1,
            icon2: plIcon2,
            icon3: plIcon3,
            icon4: plIcon4
        },
        exp6:{
            icon1: dpIcon1,
            icon2: dpIcon2,
            icon3: dpIcon3,
            icon4: dpIcon4,
            icon5: dpIcon5,
            icon6: dpIcon6,
            icon7: dpIcon7
        },
        exp5:{
            icon1: exIcon1,
            icon2: exIcon2,
            icon3: exIcon3,
            icon4: exIcon4,
            icon5: exIcon5,
            icon6: exIcon6,
            icon7: exIcon7,
            icon8: exIcon8,
            icon9: exIcon9,
            icon10: exIcon10,
            icon11: exIcon11,
            icon12: exIcon12,
            icon13: exIcon13,
            icon14: exIcon14,
            icon15: exIcon15,
            icon16: exIcon16 
        },
        exp4:{
            icon1: ecIcon1,
            icon2: ecIcon2,
            icon3: ecIcon3
        },
        exp3:{
            icon1: lcIcon1
        },
        exp2:{
            icon1: neoIcon1,
            icon2: neoIcon2,
            icon3: neoIcon3,
            icon4: neoIcon4
        },
        exp1:{
            icon1: orgIcon1,
            icon2: orgIcon2,
            icon3: orgIcon3,
            icon4: orgIcon4,
            icon5: orgIcon5,
            icon6: orgIcon6,
            icon7: orgIcon7
        }
    },
    logos:{
        exp14:{
            logo1: svLogo1,
            logo2: svLogo2,
            logo3: svLogo3,
            logo4: svLogo4,
            logo5: svLogo5,
            logo6: svLogo6,
            logo7: svLogo7,
            logo8: svLogo8,
            logo9: svLogo9
        },
        exp13:{
            logo1: ssLogo1,
            logo2: ssLogo2,
            logo3: ssLogo3,
            logo4: ssLogo4,
            logo5: ssLogo5,
            logo6: ssLogo6,
            logo7: ssLogo7,
            logo8: ssLogo8,
            logo9: ssLogo9,
            logo10: ssLogo10,
            logo11: ssLogo11,
            logo12: ssLogo12,
            logo13: ssLogo13,
            logo14: ssLogo14,
            logo15: ssLogo15,
            logo16: ssLogo16,
            logo17: ssLogo17
        },
        exp12:{
            logo1: smLogo1,
            logo2: smLogo2,
            logo3: smLogo3,
            logo4: smLogo4,
            logo5: smLogo5,
            logo6: smLogo6,
            logo7: smLogo7,
            logo8: smLogo8,
            logo9: smLogo9,
            logo10: smLogo10,
            logo11: smLogo11,
            logo12: smLogo12,
            logo13: smLogo13,
            logo14: smLogo14,
            logo15: smLogo15,
            logo16: smLogo16
        },
        exp11:{
            logo1: xyLogo1,
            logo2: xyLogo2,
            logo3: xyLogo3,
            logo4: xyLogo4,
            logo5: xyLogo5,
            logo6: xyLogo6,
            logo7: xyLogo7,
            logo8: xyLogo8,
            logo9: xyLogo9,
            logo10: xyLogo10,
            logo11: xyLogo11,
            logo12: xyLogo12,
            logo13: xyLogo13,
            logo14: xyLogo14,
            logo15: xyLogo15
        },
        exp10:{
            logo1: bwLogo1,
            logo2: bwLogo2,
            logo3: bwLogo3,
            logo4: bwLogo4,
            logo5: bwLogo5,
            logo6: bwLogo6,
            logo7: bwLogo7,
            logo8: bwLogo8,
            logo9: bwLogo9,
            logo10: bwLogo10,
            logo11: bwLogo11,
            logo12: bwLogo12
        },
        exp9:{
            logo1: colLogo1
        },
        exp8:{
            logo1: hgsLogo1,
            logo2: hgsLogo2,
            logo3: hgsLogo3,
            logo4: hgsLogo4
        },
        exp7:{
            logo1: plLogo1,
            logo2: plLogo2,
            logo3: plLogo3,
            logo4: plLogo4
        },
        exp6:{
            logo1: dpLogo1,
            logo2: dpLogo2,
            logo3: dpLogo3,
            logo4: dpLogo4,
            logo5: dpLogo5,
            logo6: dpLogo6,
            logo7: dpLogo7
        },
        exp5:{
            logo1: exLogo1,
            logo2: exLogo2,
            logo3: exLogo3,
            logo4: exLogo4,
            logo5: exLogo5,
            logo6: exLogo6,
            logo7: exLogo7,
            logo8: exLogo8,
            logo9: exLogo9,
            logo10: exLogo10,
            logo11: exLogo11,
            logo12: exLogo12,
            logo13: exLogo13,
            logo14: exLogo14,
            logo15: exLogo15,
            logo16: exLogo16 
        },
        exp4:{
            logo1: ecLogo1,
            logo2: ecLogo2,
            logo3: ecLogo3
        },
        exp3:{
            logo1: lcLogo1
        },
        exp2:{
            logo1: neoLogo1,
            logo2: neoLogo2,
            logo3: neoLogo3,
            logo4: neoLogo4
        },
        exp1:{
            logo1: orgLogo1,
            logo2: orgLogo2,
            logo3: orgLogo3,
            logo4: orgLogo4,
            logo5: orgLogo5,
            logo6: orgLogo6,
            logo7: orgLogo7
        }
    }

}

export default ImageManager
