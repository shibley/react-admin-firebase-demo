// in src/Comments.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const CommentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" />
      <RichTextField source="body" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const CommentShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="body" />
      <DisabledInput source="createdate" />
      <DisabledInput source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const CommentCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Create>
);

export const CommentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DisabledInput source="createdate" />
      <DisabledInput source="lastupdate" />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <SelectInput source="rating" choices={[
        { id: 1, name: 'Good' },
        { id: 2, name: 'Okay' },
        { id: 3, name: 'Bad' },
      ]} />
    </SimpleForm>
  </Edit>
);
