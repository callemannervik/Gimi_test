/** Node modules */
import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

/** Core */
import { COLORS } from 'Core/colors'
import { SHADOW } from 'Core/styles'

/** Components */
import Text from 'Components/Text'
import Button from 'Components/Button'
import ContentCard from 'Components/ContentCard'
import ProgressBar from 'Components/ProgressBar'
import ProgressCircle from 'Components/ProgressCircle'
import PriceLabel from 'Components/PriceLabel'
import ProfileImage from 'Components/ProfileImage'
import ScreenContainer from 'Components/ScreenContainer'

/** Mocked strings */
import strings from 'Translations/strings'

class Dashboard extends Component {
  renderHeader () {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle} size='xlarge'>
          {strings.good_morning}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('Resources/Icons/calendar.png')}
            style={styles.calendarIcon}
          />
          <Text style={styles.subTitle}>{strings.you_are_set}</Text>
        </View>
      </View>
    )
  }

  renderUser () {
    const { navigation } = this.props
    return (
      <TouchableOpacity
        style={styles.userContainer}
        onPress={() => navigation.navigate('UnderConstruction')}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.headerTitle} size='large'>{strings.bob}</Text>
            <Image
              source={require('Resources/Icons/forwardArrow.png')}
              style={styles.arrowIcon}
            />
          </View>
          <Text style={styles.subTitle}>{strings.master}</Text>
        </View>
        <ProfileImage source={require('Resources/Images/user.jpg')} />
      </TouchableOpacity>
    )
  }

  renderAllowance () {
    const { navigation } = this.props
    return (
      <ContentCard
        pressEnabled
        headerComponent={<ProgressBar progress={80} animate />}
        onPress={() => navigation.navigate('UnderConstruction')}
        animate
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>{strings.allowance}</Text>
            <Text style={styles.subTitle}>{strings.to_be_transfered}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PriceLabel value={50} showPrefix />
          </View>
        </View>
      </ContentCard>
    )
  }

  renderAccounts () {
    const { navigation } = this.props
    return (
      <ContentCard animate delay={100}>
        <View style={styles.columnsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{strings.accounts}</Text>
            <Text style={[styles.subTitle, { marginBottom: 10 }]}>{strings.gimi_card}</Text>
            <Image source={require('Resources/Images/gimiCard.png')} style={styles.gimiCard} />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <PriceLabel value={1900.54} size='xlarge' />
              <Text style={styles.subTitle}>{strings.card_balance}</Text>
            </View>
            <Button
              title={strings.top_up}
              onPress={() => navigation.navigate('UnderConstruction')}
            />
          </View>
        </View>
      </ContentCard>
    )
  }

  renderGoals () {
    const { navigation } = this.props
    return (
      <ContentCard containerStyle={{ marginRight: 5 }} animate delay={200}>
        <Text style={[styles.title, { marginBottom: 10 }]}>{strings.goals}</Text>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <ProgressCircle progress={30}>
            <Image
              source={require('Resources/Images/switch.jpeg')}
              style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
            />
          </ProgressCircle>
          <Text style={styles.subTitle} size='small'>{strings.nintendo}</Text>
        </View>
        <Button
          title={strings.contribute}
          onPress={() => navigation.navigate('UnderConstruction')}
        />
      </ContentCard>
    )
  }

  renderChores () {
    const { navigation } = this.props
    return (
      <ContentCard containerStyle={{ marginLeft: 5 }} animate delay={250}>
        <Text style={[styles.title, { marginBottom: 10 }]}>Chores</Text>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <ProgressCircle progress={30}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '500' }} size='small'>3/6</Text>
            </View>
          </ProgressCircle>
          <Text style={styles.subTitle} size='small'>{strings.this_week}</Text>
        </View>
        <Button
          title={strings.add_chore}
          onPress={() => navigation.navigate('UnderConstruction')}
        />
      </ContentCard>
    )
  }

  render () {
    return (
      <ScreenContainer
        backgroundColor={COLORS.DARK_BLUE}
        backgroundImage={require('Resources/Backgrounds/space.png')}
      >
        <ScrollView style={styles.scrollContainer}>
          {this.renderHeader()}
          {this.renderUser()}
          {this.renderAllowance()}
          {this.renderAccounts()}
          <View style={styles.columnsContainer}>
            {this.renderGoals()}
            {this.renderChores()}
          </View>
        </ScrollView>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_BLUE
  },
  scrollContainer: {
    paddingHorizontal: 20
  },
  columnsContainer: {
    flexDirection: 'row'
  },
  headerContainer: {
    paddingTop: 20,
    marginBottom: 50
  },
  headerTitle: {
    color: COLORS.WHITE,
    fontWeight: '800',
    marginBottom: 5
  },
  calendarIcon: {
    marginRight: 10
  },
  title: {
    color: COLORS.WHITE,
    fontWeight: '500'
  },
  subTitle: {
    color: COLORS.WHITE_70,
    fontWeight: '500'
  },
  gimiCard: {
    ...SHADOW,
    height: 80,
    width: 130,
    resizeMode: 'contain',
    overflow: 'visible'
  },
  userContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  arrowIcon: {
    tintColor: COLORS.WHITE_70,
    marginLeft: 10
  }
})

export default Dashboard
