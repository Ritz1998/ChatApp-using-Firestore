import {StyleSheet} from 'react-native'

const styles =StyleSheet.create({
    SignupMainWrapper:{
        flex:1,

    },
    signupContentWrapper:{
        flex:1,
        backgroundColor:"#D9D9D9"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      container: {
        flex: 1,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 80,
      },
      logo: {
        fontSize: 25,
        color: '#fff',
      },
      navItems: {
        flexDirection: 'row',
        columnGap: 25,
      },
      navLink: {
        color: '#fff',
      },
      button: {
        paddingVertical: 6,
        paddingHorizontal: 24,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 6,
      },
      buttonText: {
        color: '#fff',
      },
      home: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      form: {
        position: 'absolute',
        maxWidth: 320,
        width: '100%',
        padding: 25,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
      },
      formTitle: {
        fontSize: 22,
        color: '#0b0217',
        textAlign: 'center',
      },
      inputBox: {
        position: 'relative',
        marginTop: 30,
        width: '100%',
        height: 40,
      },
      input: {
        flex: 1,
        height: '100%',
        borderWidth: 0,
        paddingHorizontal: 30,
        color: '#333',
      },
      icon: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -50 }],
        fontSize: 20,
        color: '#707070',
      },
      optionField: {
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
        overflow: 'hidden',
      },
      checkboxContainer: {
        borderRadius: 2,
        backgroundColor: '#fff',
        padding: 2,
      },
      checkboxLabel: {
        fontSize: 12,
        color: '#0b0217',
      },
      forgotPw: {
        fontSize: 12,
        color: '#7d2ae8',
      },
      button: {
        backgroundColor: '#7d2ae8',
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 10,
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
      },
      loginSignup: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      loginSignupText: {
        color: '#0b0217',
      },
      signupLink: {
        color: '#7d2ae8',
      },

})
export default styles