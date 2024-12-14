import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import addNew from '../../styles/addNewStyle';

const AddNewList = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Kullanici adi en az 3 karakter olmalidir.')
      .required('Kullanici adi alani zorunludur.'),
  });

  return (
    <View style={addNew.container}>
      <Text style={addNew.title}>Add a Profile</Text>
      <Text style={addNew.subtitle}>
        Enter a name to create a new Netflix profile.
      </Text>
      <Formik
        initialValues={{username: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('Submitted values:', values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={addNew.form}>
            <TextInput
              style={[
                addNew.input,
                errors.username && touched.username && {borderColor: 'red'},
              ]}
              placeholder="Profile Name"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              autoCapitalize="words"
            />
            {errors.username && touched.username && (
              <Text style={addNew.errorText}>{errors.username}</Text>
            )}
            <TouchableOpacity style={addNew.button} onPress={handleSubmit}>
              <Text style={addNew.buttonText}>SAVE</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;
