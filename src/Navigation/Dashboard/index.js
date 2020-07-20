/** Node modules */
import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet, View } from 'react-native'

/** Core */
import { COLORS } from 'Core/colors'
import { SHADOW } from 'Core/styles'

/** Components */
import Text from 'Components/Text'
import Button from 'Components/Button'
import ContentCard from 'Components/ContentCard'
import BackgroundImage from 'Components/BackgroundImage'
import ProgressBar from 'Components/ProgressBar'
import ProgressCircle from 'Components/ProgressCircle'
import PriceLabel from 'Components/PriceLabel'
import ProfileImage from 'Components/ProfileImage'

/** Mocked strings */
const good_morning = 'Good morning, Calle!'
const all_set = "You're all set"
const lucy = 'Lucy'
const master = 'Master • Active 4h ago'
const allowance = 'Allowance'
const to_be_tranfered = 'to be transfered in 1 day'

class Dashboard extends Component {
  renderHeader () {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle} size='xlarge'>{good_morning}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('Resources/Icons/calendar.png')} style={styles.calendarIcon} />
          <Text style={styles.subTitle}>{all_set}</Text>
        </View>
      </View>
    )
  }

  renderUser () {
    return (
      <View style={styles.userContainer}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.headerTitle} size='large'>Lucy</Text>
            <Image source={require('Resources/Icons/forwardArrow.png')} style={styles.arrowIcon} />
          </View>
          <Text style={styles.subTitle}>{master}</Text>
        </View>
        <ProfileImage source={require('Resources/Images/user.jpg')} />
      </View>
    )
  }

  renderAllowance () {
    return (
      <ContentCard
        pressEnabled
        headerComponent={<ProgressBar progress={80} />}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>{allowance}</Text>
            <Text style={styles.subTitle}>{to_be_tranfered}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PriceLabel value={50} size='large' showPrefix />
          </View>
        </View>
      </ContentCard>
    )
  }

  renderAccounts () {
    return (
      <ContentCard>
        <View style={styles.columnsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Accounts</Text>
            <Text style={styles.subTitle}>Gimi card</Text>
            <Image source={require('Resources/Images/gimiCard.png')} style={styles.gimiCard} />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <PriceLabel value={1900.54} />
              <Text style={styles.subTitle}>Card balance</Text>
            </View>
            <Button title='Top up' />
          </View>
        </View>
      </ContentCard>
    )
  }

  renderGoals () {
    return (
      <ContentCard containerStyle={{ marginRight: 5 }}>
        <Text style={styles.title}>Goals</Text>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <ProgressCircle progress={30}>
            <Image source={require('Resources/Images/switch.jpeg')} style={styles.gimiCard} />
          </ProgressCircle>
          <Text style={styles.subTitle} size='small'>Nintendo Switch</Text>
        </View>
        <Button title='Contribute' />
      </ContentCard>
    )
  }

  renderChores () {
    return (
      <ContentCard containerStyle={{ marginLeft: 5 }}>
        <Text style={styles.title}>Chores</Text>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <ProgressCircle progress={30}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '500' }} size='small'>3/6</Text>
            </View>
          </ProgressCircle>
          <Text style={styles.subTitle} size='small'>This week</Text>
        </View>
        <Button title='Add chore' />
      </ContentCard>
    )
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <BackgroundImage source={require('Resources/Backgrounds/space.png')} />
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
      </View>
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
    marginBottom: 20
  },
  arrowIcon: {
    tintColor: COLORS.WHITE_70,
    marginLeft: 10
  }
})

export default Dashboard
