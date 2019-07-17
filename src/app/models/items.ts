export interface Item {
  id : string;
  type : string;
  links : ItemLinks;
  attributes: ItemAttributes;
  relationships: ItemRelationships;
}

interface ItemLinks {
  self: string;
  related? : string;
}

interface ItemAttributes {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties: string|null;
  display_properties: ItemDisplayProperties;
}

interface ItemDisplayProperties {
  type: string;
  image: string;
}

interface ItemRelationships {
  authors? : { links : ItemLinks };
  publishers : { links : ItemLinks };
}

export interface DataSourceInterface {
  id: string;
  title : string;
  link: string;
  type : string;
  image : string;
  author : ItemLinks;
  publisher : ItemLinks;
}

export class DataSourceItem{
  static create(item: Item) : DataSourceInterface {
    return {
      id: item.id,
      title: item.attributes.content,
      link: item.links.self,
      type: item.attributes.display_properties.type,
      image: item.attributes.display_properties.image,
      author: item.relationships.authors.links,
      publisher: item.relationships.publishers.links
    };
  }
}