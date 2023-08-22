import { PlantType } from "@prisma/client";

export const formatPlantType = (plantType: PlantType): string => {
  switch (plantType) {
    default:
    case PlantType.CAST_IRON_PLANT:
      return "Cast Iron Plant";
    case PlantType.CHINESE_EVERGREEN:
      return "Chinese Evergreen";
    case PlantType.DRACAENA_MARGINATA:
      return "Dracaena Marginata";
    case PlantType.ARROWHEAD_VINE:
      return "Arrowhead Vine";
    case PlantType.CALATHEA:
      return "Calathea";
    case PlantType.CALATHEA_ORNATA:
      return "Calathea Ornata";
    case PlantType.CHINESE_EVERGREEN:
      return "Chinese Evergreen";
    case PlantType.CORN_PLANT:
      return "Corn Plant";
    case PlantType.ENGLISH_IVY:
      return "English Ivy";
    case PlantType.HOYA:
      return "Hoya";
    case PlantType.JADE_PLANT:
      return "Jade Plant";
    case PlantType.MONEY_PLANT:
      return "Money Plant";
    case PlantType.MONSTERA_DELICIOSA:
      return "Monstera Deliciosa";
    case PlantType.ORCHID:
      return "Orchid";
    case PlantType.PEACE_LILY:
      return "Peace Lily";
    case PlantType.PEPEROMIA:
      return "Peperomia";
    case PlantType.PHILODENDRON:
      return "Philodendron";
    case PlantType.PONYTAIL_PALM:
      return "Ponytail Palm";
    case PlantType.RUBBER_PLANT:
      return "Rubber Plant";
    case PlantType.SNAKE_PLANT:
      return "Snake Plant";
    case PlantType.SPIDER_PLANT:
      return "Spider Plant";
    case PlantType.STAGHORN_FERN:
      return "Staghorn Fern";
    case PlantType.STRING_OF_PEARLS:
      return "String of Pearls";
    case PlantType.STRING_OF_HEARTS:
      return "String of Hearts";
    case PlantType.YUCCA_PLANT:
      return "Yucca Plant";
    case PlantType.ZZ_PLANT:
      return "ZZ Plant";
  }
};
