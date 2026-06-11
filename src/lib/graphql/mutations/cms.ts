import { gql } from "@apollo/client";

export const CREATE_CMS = gql`
  mutation CpContentCreateCMS($input: ContentCMSInput) {
    cpContentCreateCMS(input: $input) {
      _id
      clientPortalId
      name
      description
      language
      languages
      postUrlField
    }
  }
`;

export const CREATE_CUSTOM_POST_TYPE = gql`
  mutation CpCmsCustomPostTypesAdd($input: CustomPostTypeInput!) {
    cpCmsCustomPostTypesAdd(input: $input) {
      _id
      code
      label
      pluralLabel
    }
  }
`;

export const CREATE_FIELD_GROUP = gql`
  mutation CpCmsCustomFieldGroupsAdd($input: CustomFieldGroupInput!) {
    cpCmsCustomFieldGroupsAdd(input: $input) {
      _id
      label
      code
      fields
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CpCmsCategoriesAdd($input: PostCategoryInput!) {
    cpCmsCategoriesAdd(input: $input) {
      _id
      name
      slug
    }
  }
`;

export const CREATE_TAG = gql`
  mutation CpCmsTagsAdd($input: PostTagInput!) {
    cpCmsTagsAdd(input: $input) {
      _id
      name
      slug
    }
  }
`;

export const CREATE_PAGE = gql`
  mutation CpCmsPagesAdd($input: PageInput!) {
    cpCmsPagesAdd(input: $input) {
      _id
      name
      slug
      status
    }
  }
`;

export const CREATE_POST = gql`
  mutation CpCmsPostsAdd($input: PostInput!) {
    cpCmsPostsAdd(input: $input) {
      _id
      title
      slug
      status
      categoryIds
      tagIds
    }
  }
`;

export const CREATE_TRANSLATION = gql`
  mutation CpCmsAddTranslation($input: TranslationInput!) {
    cpCmsAddTranslation(input: $input) {
      _id
      objectId
      language
      type
      title
    }
  }
`;

export const CREATE_MENU = gql`
  mutation CpCmsAddMenu($input: MenuItemInput!) {
    cpCmsAddMenu(input: $input) {
      _id
      kind
      label
      url
      order
    }
  }
`;
