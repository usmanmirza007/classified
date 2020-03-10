import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window');

export default class termAndCondition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: true
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <ScrollView>
          <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>POLICIES</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>GENERAL POLICIES</Text>
            <Text style={{ fontSize: 15, marginTop: 5 }}>•	Ads Reply Conduct / Procedure</Text>
            <Text style={{ fontSize: 15, marginTop: 5 }}>We reserve the right to delete or ban those who would post or reply inappropriately.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold' }}>Code of conduct for contacting other users:</Text>
            <Text style={{ fontSize: 15, marginTop: 5, }}>•	Please treat all other users with courtesy and respect.</Text>
            <Text style={{ fontSize: 15,}}>•	Do not reply to ads with unsolicited opinions, comments, or judgements about the content (s) of the ads, the price of the item, or the poster themselves.</Text>
            <Text style={{ fontSize: 15,}}>•	Abusive replies are not allowed. Any replies containing hate speech, religious, ethnic issues or defamation are strictly prohibited.</Text>
            <Text style={{ fontSize: 15,}}>•	All replies to ads must be about what the ad is offering. Replies containing other commercial offers are not allowed on HPO.</Text>
            <Text style={{ fontSize: 15,}}>•	Impersonating other users, including supplying fake phone numbers, is not permitted. Those who are found to be doing so may lose the ability to use HPO.</Text>
            <Text style={{ fontSize: 15,}}>•	HPO reserves the right to revoke the ability of any user to reply to ads without notice.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Receiving Inappropriate Replies</Text>
            <Text style={{ fontSize: 15, marginTop: 5, }}>If you receive an inappropriate reply, please do not reply. You can delete the conversation using the Delete conversation button at the bottom of your messages.
            If a user has become rude mid-conversation, remember that you can rate your experiences with them using the Rate Buyer or Rate Seller button found when you open the conversation.
            If the reply is threatening or hateful, please report it to our support team.
            </Text> 
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Data Protection Act </Text>
            <Text style={{ fontSize: 15, marginTop: 5, }}>•	Rights under data protection act</Text>
            <Text style={{ fontSize: 15, marginTop: 5, }}>The rights are covered under data protection bill of 2018, Chapter II, Chapter III and Chapter IV for the use of clients / customers and remaining bill is for details: <Text style = {{fontSize: 15, textDecorationLine: 'underline', textDecorationColor: '#000'}}> https://moitt.gov.pk/SiteImage/Downloads/Personal%20Data%20Protection%20Bill%20without%20track%20changes.pdf</Text></Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>ARTICLES RELATED TO AD REPLY CODE OF CONDUCT</Text>
            <Text style={{ fontSize: 15, marginTop: 5, }}>Can I Turn Off Email Messages?Sending & Receiving Messages
            Reporting an AdGeneral Posting Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Ads Posting Policies</Text>
            <Text style={{ fontSize: 15, marginTop: 5, }}>At Humara Pakistan Online (HPO), we want to make sure that the site is as clear, user friendly and helpful to everyone. Ads that fall outside the posting rules stated in our Help sections or our Terms of Use may be removed from the site.
            You are solely responsible for all information that you submit to and any consequences that may result from your post. We reserve the right at our discretion to refuse or delete content that we believe is inappropriate or breaching our Terms of Use. We also reserve the right 
            at our discretion either to restrict a user’s usage of the site temporarily or permanently, or to refuse a users registration.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Please read the following policies into account before posting any ad:</Text>
            <Text style={{ fontSize: 15, marginTop: 5, }}>•	All HPO ads must be posted by members of 18 years of age and over.</Text>
            <Text style={{ fontSize: 15,}}>•	Malicious, defaming or slanderous ads are not permitted on the site. Moreover posts targeting ethnic, religious and other such issues as deemed inappropriate by Pakistani law are prohibited. </Text>
            <Text style={{ fontSize: 15,}}>•	Illegal items or services are not permitted on HPO.</Text>
            <Text style={{ fontSize: 15,}}>•	Ad that contains adult, mature or erotic content are not allowed.</Text>
            <Text style={{ fontSize: 15,}}>•	All ads must be posted in the most appropriate category.</Text>
            <Text style={{ fontSize: 15,}}>•	Each item, job or service should only be posted on the site once. Duplicates and spam ads are not allowed and will be removed.</Text>
            <Text style={{ fontSize: 15,}}>•	Each ad must only contain one item. Multiple items must be listed in individual ads, with the exception of household clearance ads and job ads with multiple openings for the same position.</Text>
            <Text style={{ fontSize: 15,}}>•	Items posted for sale must include the price within the ad.</Text>
            <Text style={{ fontSize: 15,}}>•	URLs must be entered in the URL field, not in the description of the ad.</Text>
            <Text style={{ fontSize: 15,}}>•	Members must enter their contact details in the correct fields within their ads. Revealing these details in the ad description, photos or title is not allowed.</Text>
            <Text style={{ fontSize: 15,}}>•	Premium phone numbers are not permitted to be used in the Contact Phone Number field, or in the ad description. They can be used in the Registered Phone Number field.</Text>
            <Text style={{ fontSize: 15,}}>•	Adding fake or invalid phone numbers is not allowed. Including a phone number in your ad is optional. If you don’t want to include one, leave the field blank.</Text>
            <Text style={{ fontSize: 15,}}>•	Keyword spamming (including many irrelevant words within your ad) to manipulate searches is not allowed.</Text>
            <Text style={{ fontSize: 15,}}>•	HPO does not allow discrimination of any kind.</Text>
            <Text style={{ fontSize: 15,}}>•	Offensive language, hate speech or extreme profanity are not allowed.</Text>
            <Text style={{ fontSize: 15,}}>•	Sold items and other ads that are no longer available should be deleted by the poster.</Text>
            <Text style={{ fontSize: 15,}}>•	All items and services must be based in the Pakistan, unless advertising an overseas property, in which case it must be posted in the International Property category.</Text>
            <Text style={{ fontSize: 15,}}>•	Ads stating that they will not accept cash are not permitted.</Text>
            <Text style={{ fontSize: 15,}}>•	Ads stating that the item is not able to be inspected or picked up in person are not allowed.</Text>
            <Text style={{ fontSize: 15,}}>•	Pre-order ads are not allowed. All items must be in the possession of the seller before they can be posted.</Text>
            <Text style={{ fontSize: 15,}}>•	All ads must be posted in English or users may change the language of site to Urdu. Having a translation in another language is permitted.</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>What’s not allowed to post on HPO</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>As a responsible business of Pakistan, it is our priority to ensure that our community remains safe. We don’t allow the sale of anything illegal, dangerous and items which are prohibited by the law of Pakistan. We also prohibit certain items at the request of our community if someone feel threatened or that might cause any damage to someone. In case of any banned or illegal item, we reserve the rights to ask you to take it down or we will remove ourselves.
            The list below contains the names of banned items and can’t be posted on HPO. This list is not exhaustive and will be update in case of any change by the government o Pakistan or any complaints by the customers:
            Adult-only
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Adult entertainment movies and contents (age restrictions applied by the government)</Text>
            <Text style={{ fontSize: 15,}}>•	All other adult products which come under age restriction</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Dangerous / hazardous chemicals
            {'\n'}Drugs and prescription goods
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Illegal drugs{'\n'}
            •	Prescription drugs/medicines{'\n'}
            •	Steroids{'\n'}
            •	Over the counter drugs{'\n'} 
            •	Contact lenses
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Digital goods</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Domain names{'\n'} 
            •	E-books{'\n'} 
            •	E-tickets{'\n'} 
            •	Online accounts{'\n'} 
            •	Virtual merchandise, including in-game currencies or items{'\n'} 
            •	Virtual and real currencies (e.g. Dollars, Bitcoin, Litecoin, etc.){'\n'} 
            •	Note: Asking to be paid for an item or service in a virtual or real currency is allowed, but the currency itself cannot be sold directly.{'\n'} 
            •	Any other digital products
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Fake, replica, or unauthorised trademark items{'\n'} 
            Firearms, ammunition and equipment (even if they’re legal to buy)
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Guns, including air guns, BB guns, replica guns, and paintball guns{'\n'} 
            •	Silencers{'\n'} 
            •	Ammunition, including ammo for paintball{'\n'} 
            •	Note: Paintball equipment not related to the gun (goggles, gloves etc.) are allowed{'\n'} 
            •	Hunting equipment{'\n'} 
            •	Note: Scopes, straps, and gun cabinets are allowed
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Fireworks (of any kind){'\n'} 
            Gambling machines
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Fruit/slot machines etc</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Gas and electricity meters{'\n'}
            Hate organisations of any kind{'\n'}
            Human parts, remains, or services
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Blood, bone, and waste{'\n'}
            •	Donor, surrogacy, and fertility services{'\n'}
            •	Organs{'\n'}
            •	Sperm and eggs{'\n'}
            •	Used pregnancy tests or any other pregnancy related services
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Items promoting hate, discrimination, or stereotypes of a particular group of people
            Lottery tickets{'\n'}
            Personal information or mailing lists
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Bulk emails, Internet Protocol (IP), instant messenger (IM), or mailing lists that contain names, addresses, phone numbers, or other personal info{'\n'}
            •	Tools or software designed to send spam
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Diesel, petrol or any other inflammable liquids{'\n'}
            Security tag removal items{'\n'}
            stolen goods
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	This includes blocked phones or no-signal phones{'\n'}
            •	Buyers are advised to request for purchase receipt from the sellers
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Supplements</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Including supplements that contain DMAA, (1,3-dimethylamylamine) is an amphetamine derivative that has been marketed in sports performance and weight loss products, many of which are sold as dietary supplements</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Tickets not intended for resale, including cricket or any other event{'\n'}
            Unlocked hardware and software, which comes under data protection act
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Copied games, DVDs, and computer soft-wares{'\n'}
            •	Games consoles
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Unlocking software (software that unlocks any electronic item, like a phone or game console){'\n'}
            Used undergarments, including nappies etc{'\n'}
            Weapons and knives
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Knives of all kinds including chef and kitchen knives{'\n'}
            •	Note: Cutlery/butter knives are allowed{'\n'}
            •	Crossbows and archery sets{'\n'}
            •	Historical and ornamental weapons (like Samurai swords, bayonets and decoration weapons){'\n'}
            •	Spear guns
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Wild Life</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	All parts of animals which are prohibited for sale as per wild life regulations in Pakistan and WWF, i.e. ivory, skins, etc</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Duplicate Ads</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Multiple ads posted for the same item/service are considered duplicates on HPO. Duplicates clutter the listings and make searching harder for other users. When posting ads, please keep the following in mind:</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Do not post the same ad in multiple categories. If you’re unsure of which category to use, try searching HPO to find out where others have put similar ads.{'\n'}
            •	Post your ad within your own area for maximum exposure. Remember, people that are willing to travel will search wider areas or use the distance search feature to find your ad.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Posting duplicate ads on HPO may cause your ad to be removed. If you want more exposure on your ads, try one of our promotion options instead.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Note:</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	We reserve the right to remove ads that hinder the user experience.{'\n'}
            •	For duplicate policies surrounding Services, please read our Service Policies article.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>ARTICLES RELATED TO DUPLICATE ADS</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>What is Not Allowed on HPO?Retailer Policies{'\n'}
            Report a Violation of Intellectual PropertyReporting an Ad{'\n'}
            Services PoliciesGeneral Posting Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Avoiding Discrimination</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Everyone wants and deserves to be treated fairly. Pakistan has a dual system of civil and sharia law. The Constitution of Pakistan recognizes equality between men and women (Art. 25(2) states "There shall be no discrimination on the basis of Gender/sex").</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>When you’re posting on HPO, it’s very important that your ad respects the law. You need to write your ads so that they don’t discriminate based on age, disability, gender, race, religion or belief, or sexual orientation.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Know Your Rights and Responsibilities</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>The easy way to bring the spirit and the letter of the law to your posts is with this brilliant online tool from the Equality and Human Rights Commission. It helps you to find the guidance you need in almost every scenario, whether you’re posting or responding. And best of all, it’s free.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Focus on the Skills You’re After, Not the Person</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>When you’re writing your job description, focus on stating the skills you’re looking for. Don’t think about a particular type of person.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Report an Ad</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>At HPO, we rely on our community to help us keep everything as it should be. You can get involved by reporting an ad you want us to look at. We’ll work with its owner to help get it right.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>ARTICLES RELATED TO AVOIDING DISCRIMINATION</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>What is Not Allowed on HPO?Ad Reply Code of Conduct{'\n'}
            Jobs PoliciesCommunity Policies{'\n'}
            Property PoliciesGeneral Posting Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>
            Category Specific Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Services Policies (The below details would be hyperlinked)</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>All services advertised in classified ads and in reply to other ads must adhere to our services rules, as well as our regular posting policies. Read our policies surrounding certain services below:</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Sexual Services</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Adult, erotic or sexual services of any kind are prohibited including but not limited to: webcamming, modelling, photography, escort and prostitution.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Loans</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Ads offering or requesting loans, with or without interest.{'\n'}
            •	Money collecting services.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Financial & Car Insurance Services</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Insurance services are required to have both a professional email / account as well as a landline number. Offering these services without these two pieces of information is not allowed.{'\n'}
            •	If insurance is only offered in addition to an item being sold, the above qualifications are not required.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5,fontWeight: 'bold'}}>Botox Services</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Botox and other prescription medication are not allowed on HPO. As such, neither are services offering their administration.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Dissertation and Essay Writing Services</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	We do not permit ads offering to complete homework for students.{'\n'}
            •	Editing, proofreading, or services offering guidance/tutoring are allowed.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Massage Ads</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Massage services are welcome on HPOas long as they are offered by trained professionals. When posting ads in this category, please include your qualifications within the ad, as well as following the policies below:</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	No sexual massages. This includes Nuru, Tantric, Sensual, Undraped and Happy Ending.{'\n'}
            •	No free or exchange massages.{'\n'}
            •	No Wanted ads for massages.{'\n'}
            •	Massage ads must not use photos of real people. Cartoons, mannequins, diagrams, etc, are allowed as long as they are not used in a sexual manner.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>
            ARTICLES RELATED TO SERVICES POLICIES
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>What is Not Allowed on HPO?Pets Policies{'\n'}
            Jobs PoliciesCommunity Policies{'\n'}
            Property PoliciesGeneral Posting Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Jobs Policies</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Along with our general posting policies, all Jobs posted on HPO must follow the policies below:</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	All Jobs ads must be for applicants 18 years of age and over. Ads specifically requesting applicants under 18 are not permitted on HPO.{'\n'}
            •	Generic postings advertising multiple different positions or employment services in a single ad are not allowed.{'\n'}
            •	All job ads are required to include the salary band and location, as well as providing a detailed job description.{'\n'}
            •	We do not accept postings which require down payments in any forms, including requiring candidates to send money or stamped, addressed envelopes to gain further details of the positions.{'\n'}
            •	We do not accept postings that advertise for models or actors (either male or female) using generic (Hotmail, Yahoo, Gmail, etc.) email accounts and/or mobile phone numbers. These posters must include a registered agency email address and landline phone number.{'\n'}
            •	We do not allow Job ads that require a photo in the application. Modelling or acting jobs are exempted from this policy, as long as they also fit the requirements described above.{'\n'}
            •	All 'work from home' job offers must be posted using a business domain while also meeting all other job policy requirements.{'\n'}
            •	Job offers taking place overseas must be paid in respective currency of the country and employment contracts must be signed at a local branch. The ads must state a local street address, valid phone number, a website, and as much information about the positions as possible to be compliant.{'\n'}
            •	We do not allow jobs for adult, erotic, or sexual services of any kind. This includes but is not limited to: adult web-camming, adult modelling/photography, escort and prostitution.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Replying to Job Ads</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Replies to ads for any purpose other than recruitment to a legitimate position are prohibited.{'\n'}
            •	Replies to ads for personal reasons, or for solicitation of any sexual or otherwise inappropriate purposes are strictly prohibited and may result in a loss of ability to use HPO.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>It is the responsibility of the advertiser posting an ad on HPO to ensure that content advertised adheres to all HPO posting policies as well as applicable laws. As a condition of your use of HPO specified under our Terms of Use, you agree that you will not violate any laws. For more of HPO’s policies, please read our General Posting Policies andWhat’s Not Allowed on HPO articles.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>ARTICLES RELATED TO JOBS POLICIES</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>What is Not Allowed on HPO?Pets Policies{'\n'}
            Property PoliciesCommunity Policies{'\n'}
            Services PoliciesGeneral Posting Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Property Policies</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Along with our general posting policies, all Property ads posted on HPO must follow the policies below:</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	When posting ads for room rentals, you may request the type of person you are looking for. However, please note that we do not allow discrimination against the protected classes defined under Art 25(2).{'\n'}
            •	Property owners may not request fees. {'\n'}
            •	If your property is outside of the Pakistan, it must be posted within either the Holiday Rentals or International subcategories.{'\n'}
            •	Caravans may be advertised in Property or Holiday Rentals, depending on the length of the rental.{'\n'}
            •	Professional landlords and real estate agents must select ‘Yes’ when asked ‘Are you acting as an agent?’ Posting as a non-business is misleading, and therefore not allowed.{'\n'}
            •	Shared property requested between male and female{'\n'}
            •	Legally Disputed properties{'\n'}
            •	Sale / rent of religious properties and Okaf properties{'\n'}
            •	All properties which are restricted for sale / rent under the law of Provinces and Pakistan
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Knowing your legal obligations</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>When posting in property, please ensure that you know your legal obligations. Property laws vary depending on where the property is in the Pakistan, and the type of tenancy. While we are not able to list every law or regulation in this article, failure to meet your local requirements may result in your ad being removed from HPO.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>ARTICLES RELATED TO PROPERTY POLICIES</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>What is Not Allowed on HPO?Pets Policies{'\n'}
            Avoiding DiscriminationServices PoliciesGeneral Posting Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Retailer Policies</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Along with our general posting policies, all retailers posting on HPO must follow the policies below:</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Businesses may post in the For Sale category as long as they are selling individual items. When advertising the business as a whole, please post in the Goods Retailers subcategory within Services.{'\n'}
            •	Businesses posting Wanted ads for items like scrap, used electronics, or similar removal services must be posted in the most appropriate Services categories.{'\n'}
            •	Our duplicate ads policies are for both regular and business users. All business ads should be unique ads advertising a single item or service.{'\n'}
            •	Professional sellers and businesses must select ‘Business’ when asked what seller type they are. Posting as a non-business is misleading, and therefore not allowed.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Note: We reserve the right to remove ads that hinder the user experience.</Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>ARTICLES RELATED TO RETAILER POLICIES</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>What is Not Allowed on HPO?{'\n'}
            Duplicate AdsBusiness Accounts{'\n'}
            Business Development on HPO                      General Posting Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Community Policies</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>Along with our general posting policies, all Community ads posted on HPO must follow the policies below:</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Free services can be advertised in the Community category when the service is for learning or training purposes only. Services for any other purpose must be posted in the Service category.{'\n'}
            •	Political parties and activists are permitted to advertise meetings, events, or rallies as long as they are not promoting hate speech, racism, or offensive content. The ad must also focus on the event, not primarily advertise their beliefs.{'\n'}
            •	HPO does not allow personals ads. This includes ads looking for romantic or sexual partners. Requests for charitable donations by either an organization or an individual are permitted in “Donation” section on HPO.
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>ARTICLES RELATED TO COMMUNITY POLICIES</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>What is Not Allowed on HPO?Pets Policies{'\n'}
            Ad Reply Code of ConductAvoiding Discrimination{'\n'}
            Services PoliciesGeneral Posting Policies
            </Text>
            <Text style={{ fontSize: 15, marginTop: 5, fontWeight: 'bold'}}>Pets Policy</Text>
            <Text style={{ fontSize: 15, marginTop: 5}}>•	Sale of Endangered or Exotic Species is not allowed{'\n'}
            •	Animal adoption or animals for free is prohibited{'\n'}
            •	Pet food, treats, and vitamins are not allowed to be sold on HPO, unless they are authorised dealers and have stores with full address and contact details for return and guarantee purposes{'\n'}
            •	Animals or species which are prohibited as per the law of Pakistan and WWF{'\n'}
            •	The sale of prescription drugs for pets is not permitted on HPO, including contraceptive drugs
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});