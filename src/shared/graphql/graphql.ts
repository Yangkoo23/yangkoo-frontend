/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type Amenity = {
  __typename?: 'Amenity';
  amenity: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type AmenityConnection = {
  __typename?: 'AmenityConnection';
  edges: Array<AmenityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AmenityEdge = {
  __typename?: 'AmenityEdge';
  cursor: Scalars['String']['output'];
  node: Amenity;
};

export enum BookingStatusType {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type City = {
  __typename?: 'City';
  Region?: Maybe<Region>;
  city?: Maybe<Scalars['String']['output']>;
  city_description?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  region_id: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CityConnection = {
  __typename?: 'CityConnection';
  edges: Array<CityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CityEdge = {
  __typename?: 'CityEdge';
  cursor: Scalars['String']['output'];
  node: City;
};

export type Country = {
  __typename?: 'Country';
  country?: Maybe<Scalars['String']['output']>;
  country_description?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  edges: Array<CountryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  cursor: Scalars['String']['output'];
  node: Country;
};

export type CreateAmenity = {
  amenity: Scalars['String']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCity = {
  city?: InputMaybe<Scalars['String']['input']>;
  city_description?: InputMaybe<Scalars['String']['input']>;
  region_id: Scalars['String']['input'];
};

export type CreateCountry = {
  country?: InputMaybe<Scalars['String']['input']>;
  country_description?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFile = {
  caption: Scalars['String']['input'];
  file_key: Scalars['String']['input'];
  file_type: Scalars['String']['input'];
  hotel_id?: InputMaybe<Scalars['String']['input']>;
  hotel_room_id?: InputMaybe<Scalars['String']['input']>;
  location_id?: InputMaybe<Scalars['String']['input']>;
  mimetype: Scalars['String']['input'];
};

export type CreateHotel = {
  hotel_description?: InputMaybe<Scalars['String']['input']>;
  hotel_name: Scalars['String']['input'];
  latitude?: InputMaybe<Scalars['Float']['input']>;
  location_id: Scalars['String']['input'];
  longitude?: InputMaybe<Scalars['Float']['input']>;
  start_category?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateHotelAmenity = {
  amenity_id: Scalars['String']['input'];
  hotel_id: Scalars['String']['input'];
};

export type CreateHotelBooking = {
  booking_date: Scalars['Date']['input'];
  booking_status: BookingStatusType;
  hotel_room_id: Scalars['String']['input'];
  number_of_people: Scalars['Int']['input'];
  user_id: Scalars['String']['input'];
};

export type CreateHotelBookingPayment = {
  amount: Scalars['Float']['input'];
  hotel_booking_id: Scalars['String']['input'];
  number_of_people: Scalars['Int']['input'];
  payment_date: Scalars['Date']['input'];
};

export type CreateHotelFacility = {
  hotel_facility: Scalars['String']['input'];
  hotel_id: Scalars['String']['input'];
};

export type CreateHotelPolicy = {
  hotel_id: Scalars['String']['input'];
  hotel_policy: Scalars['String']['input'];
};

export type CreateHotelRefund = {
  amount: Scalars['Float']['input'];
  hotel_booking_id: Scalars['String']['input'];
  refund_date: Scalars['Date']['input'];
  refund_status: RefundStatusType;
};

export type CreateHotelReview = {
  comment?: InputMaybe<Scalars['String']['input']>;
  hotel_id: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  user_id: Scalars['String']['input'];
};

export type CreateHotelRoom = {
  bed_type: Scalars['String']['input'];
  capacity: Scalars['Int']['input'];
  discounted_price?: InputMaybe<Scalars['Float']['input']>;
  hotel_id: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  price_type: PriceTypeEnum;
  quantity: Scalars['Int']['input'];
  room_type: Scalars['String']['input'];
  size: Scalars['Int']['input'];
};

export type CreateHotelRoomInclusion = {
  hotel_room_id: Scalars['String']['input'];
  inclusion: Scalars['String']['input'];
};

export type CreateHotelRoomPrice = {
  hotel_room_price_season_id: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateHotelRoomPriceSeason = {
  hotel_room_price_year_id: Scalars['String']['input'];
  season_end: Scalars['Date']['input'];
  season_start: Scalars['Date']['input'];
};

export type CreateHotelRoomPriceYear = {
  hotel_room_id: Scalars['String']['input'];
  room_price_year: Scalars['Int']['input'];
};

export type CreateLocation = {
  city_id: Scalars['String']['input'];
  location_description?: InputMaybe<Scalars['String']['input']>;
  location_name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRegion = {
  country_id: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  region_description?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUser = {
  id: Scalars['ID']['input'];
};

export type File = {
  __typename?: 'File';
  caption: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  file_key: Scalars['String']['output'];
  file_type: Scalars['String']['output'];
  hotel_id?: Maybe<Scalars['String']['output']>;
  hotel_room_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location_id?: Maybe<Scalars['String']['output']>;
  mimetype: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  edges: Array<FileEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FileEdge = {
  __typename?: 'FileEdge';
  cursor: Scalars['String']['output'];
  node: File;
};

export type Hotel = {
  __typename?: 'Hotel';
  Location?: Maybe<Location>;
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_description?: Maybe<Scalars['String']['output']>;
  hotel_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  location_id: Scalars['String']['output'];
  longitude?: Maybe<Scalars['Float']['output']>;
  start_category?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelAmenity = {
  __typename?: 'HotelAmenity';
  amenity_id: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelAmenityConnection = {
  __typename?: 'HotelAmenityConnection';
  edges: Array<HotelAmenityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelAmenityEdge = {
  __typename?: 'HotelAmenityEdge';
  cursor: Scalars['String']['output'];
  node: HotelAmenity;
};

export type HotelBooking = {
  __typename?: 'HotelBooking';
  booking_date: Scalars['Date']['output'];
  booking_status: BookingStatusType;
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_room_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  number_of_people: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['String']['output'];
};

export type HotelBookingConnection = {
  __typename?: 'HotelBookingConnection';
  edges: Array<HotelBookingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelBookingEdge = {
  __typename?: 'HotelBookingEdge';
  cursor: Scalars['String']['output'];
  node: HotelBooking;
};

export type HotelBookingPayment = {
  __typename?: 'HotelBookingPayment';
  amount: Scalars['Float']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_booking_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  number_of_people: Scalars['Int']['output'];
  payment_date: Scalars['Date']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelBookingPaymentConnection = {
  __typename?: 'HotelBookingPaymentConnection';
  edges: Array<HotelBookingPaymentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelBookingPaymentEdge = {
  __typename?: 'HotelBookingPaymentEdge';
  cursor: Scalars['String']['output'];
  node: HotelBookingPayment;
};

export type HotelConnection = {
  __typename?: 'HotelConnection';
  edges: Array<HotelEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelEdge = {
  __typename?: 'HotelEdge';
  cursor: Scalars['String']['output'];
  node: Hotel;
};

export type HotelFacility = {
  __typename?: 'HotelFacility';
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_facility: Scalars['String']['output'];
  hotel_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelFacilityConnection = {
  __typename?: 'HotelFacilityConnection';
  edges: Array<HotelFacilityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelFacilityEdge = {
  __typename?: 'HotelFacilityEdge';
  cursor: Scalars['String']['output'];
  node: HotelFacility;
};

export type HotelPolicy = {
  __typename?: 'HotelPolicy';
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_id: Scalars['String']['output'];
  hotel_policy: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelPolicyConnection = {
  __typename?: 'HotelPolicyConnection';
  edges: Array<HotelPolicyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelPolicyEdge = {
  __typename?: 'HotelPolicyEdge';
  cursor: Scalars['String']['output'];
  node: HotelPolicy;
};

export type HotelRefund = {
  __typename?: 'HotelRefund';
  amount: Scalars['Float']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_booking_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  refund_date: Scalars['Date']['output'];
  refund_status: RefundStatusType;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelRefundConnection = {
  __typename?: 'HotelRefundConnection';
  edges: Array<HotelRefundEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelRefundEdge = {
  __typename?: 'HotelRefundEdge';
  cursor: Scalars['String']['output'];
  node: HotelRefund;
};

export type HotelReview = {
  __typename?: 'HotelReview';
  comment?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['String']['output'];
};

export type HotelReviewConnection = {
  __typename?: 'HotelReviewConnection';
  edges: Array<HotelReviewEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelReviewEdge = {
  __typename?: 'HotelReviewEdge';
  cursor: Scalars['String']['output'];
  node: HotelReview;
};

export type HotelRoom = {
  __typename?: 'HotelRoom';
  bed_type: Scalars['String']['output'];
  capacity: Scalars['Int']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  discounted_price?: Maybe<Scalars['Float']['output']>;
  hotel_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  price_type: PriceTypeEnum;
  quantity: Scalars['Int']['output'];
  room_type: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelRoomConnection = {
  __typename?: 'HotelRoomConnection';
  edges: Array<HotelRoomEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelRoomEdge = {
  __typename?: 'HotelRoomEdge';
  cursor: Scalars['String']['output'];
  node: HotelRoom;
};

export type HotelRoomInclusion = {
  __typename?: 'HotelRoomInclusion';
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_room_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inclusion: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelRoomInclusionConnection = {
  __typename?: 'HotelRoomInclusionConnection';
  edges: Array<HotelRoomInclusionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelRoomInclusionEdge = {
  __typename?: 'HotelRoomInclusionEdge';
  cursor: Scalars['String']['output'];
  node: HotelRoomInclusion;
};

export type HotelRoomPrice = {
  __typename?: 'HotelRoomPrice';
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_room_price_season_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelRoomPriceConnection = {
  __typename?: 'HotelRoomPriceConnection';
  edges: Array<HotelRoomPriceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelRoomPriceEdge = {
  __typename?: 'HotelRoomPriceEdge';
  cursor: Scalars['String']['output'];
  node: HotelRoomPrice;
};

export type HotelRoomPriceSeason = {
  __typename?: 'HotelRoomPriceSeason';
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_room_price_year_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  season_end: Scalars['Date']['output'];
  season_start: Scalars['Date']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelRoomPriceSeasonConnection = {
  __typename?: 'HotelRoomPriceSeasonConnection';
  edges: Array<HotelRoomPriceSeasonEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelRoomPriceSeasonEdge = {
  __typename?: 'HotelRoomPriceSeasonEdge';
  cursor: Scalars['String']['output'];
  node: HotelRoomPriceSeason;
};

export type HotelRoomPriceYear = {
  __typename?: 'HotelRoomPriceYear';
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  hotel_room_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  room_price_year: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type HotelRoomPriceYearConnection = {
  __typename?: 'HotelRoomPriceYearConnection';
  edges: Array<HotelRoomPriceYearEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HotelRoomPriceYearEdge = {
  __typename?: 'HotelRoomPriceYearEdge';
  cursor: Scalars['String']['output'];
  node: HotelRoomPriceYear;
};

export type ImageUrls = {
  __typename?: 'ImageUrls';
  Urls: Array<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  City?: Maybe<City>;
  city_id: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  location_description?: Maybe<Scalars['String']['output']>;
  location_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type LocationConnection = {
  __typename?: 'LocationConnection';
  edges: Array<LocationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String']['output'];
  node: Location;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAmenity: Amenity;
  createFile: File;
  createHotel: Hotel;
  createHotelAmenity: HotelAmenity;
  createHotelBooking: HotelBooking;
  createHotelBookingPayment: HotelBookingPayment;
  createHotelFacility: HotelFacility;
  createHotelPolicy: HotelPolicy;
  createHotelRefund: HotelRefund;
  createHotelReview: HotelReview;
  createHotelRoom: HotelRoom;
  createHotelRoomInclusion: HotelRoomInclusion;
  createHotelRoomPrice: HotelRoomPrice;
  createHotelRoomPriceSeason: HotelRoomPriceSeason;
  createHotelRoomPriceYear: HotelRoomPriceYear;
  createLocation: Location;
  createUser: User;
  deleteAmenity: Scalars['Boolean']['output'];
  deleteFile: Scalars['Boolean']['output'];
  deleteHotel: Scalars['Boolean']['output'];
  deleteHotelAmenity: Scalars['Boolean']['output'];
  deleteHotelBooking: Scalars['Boolean']['output'];
  deleteHotelBookingPayment: Scalars['Boolean']['output'];
  deleteHotelFacility: Scalars['Boolean']['output'];
  deleteHotelPolicy: Scalars['Boolean']['output'];
  deleteHotelRefund: Scalars['Boolean']['output'];
  deleteHotelReview: Scalars['Boolean']['output'];
  deleteHotelRoom: Scalars['Boolean']['output'];
  deleteHotelRoomInclusion: Scalars['Boolean']['output'];
  deleteHotelRoomPrice: Scalars['Boolean']['output'];
  deleteHotelRoomPriceSeason: Scalars['Boolean']['output'];
  deleteHotelRoomPriceYear: Scalars['Boolean']['output'];
  deleteLocation: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  updateAmenity: Amenity;
  updateFile: File;
  updateHotel: Hotel;
  updateHotelAmenity: HotelAmenity;
  updateHotelBooking: HotelBooking;
  updateHotelBookingPayment: HotelBookingPayment;
  updateHotelFacility: HotelFacility;
  updateHotelPolicy: HotelPolicy;
  updateHotelRefund: HotelRefund;
  updateHotelReview: HotelReview;
  updateHotelRoom: HotelRoom;
  updateHotelRoomInclusion: HotelRoomInclusion;
  updateHotelRoomPrice: HotelRoomPrice;
  updateHotelRoomPriceSeason: HotelRoomPriceSeason;
  updateHotelRoomPriceYear: HotelRoomPriceYear;
  updateLocation: Location;
};


export type MutationCreateAmenityArgs = {
  input: CreateAmenity;
};


export type MutationCreateFileArgs = {
  input: CreateFile;
};


export type MutationCreateHotelArgs = {
  input: CreateHotel;
};


export type MutationCreateHotelAmenityArgs = {
  input: CreateHotelAmenity;
};


export type MutationCreateHotelBookingArgs = {
  input: CreateHotelBooking;
};


export type MutationCreateHotelBookingPaymentArgs = {
  input: CreateHotelBookingPayment;
};


export type MutationCreateHotelFacilityArgs = {
  input: CreateHotelFacility;
};


export type MutationCreateHotelPolicyArgs = {
  input: CreateHotelPolicy;
};


export type MutationCreateHotelRefundArgs = {
  input: CreateHotelRefund;
};


export type MutationCreateHotelReviewArgs = {
  input: CreateHotelReview;
};


export type MutationCreateHotelRoomArgs = {
  input: CreateHotelRoom;
};


export type MutationCreateHotelRoomInclusionArgs = {
  input: CreateHotelRoomInclusion;
};


export type MutationCreateHotelRoomPriceArgs = {
  input: CreateHotelRoomPrice;
};


export type MutationCreateHotelRoomPriceSeasonArgs = {
  input: CreateHotelRoomPriceSeason;
};


export type MutationCreateHotelRoomPriceYearArgs = {
  input: CreateHotelRoomPriceYear;
};


export type MutationCreateLocationArgs = {
  input: CreateLocation;
};


export type MutationCreateUserArgs = {
  input: CreateUser;
};


export type MutationDeleteAmenityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelAmenityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelBookingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelBookingPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelFacilityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelPolicyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelRefundArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelRoomArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelRoomInclusionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelRoomPriceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelRoomPriceSeasonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHotelRoomPriceYearArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAmenityArgs = {
  input: UpdateAmenity;
};


export type MutationUpdateFileArgs = {
  input: UpdateFile;
};


export type MutationUpdateHotelArgs = {
  input: UpdateHotel;
};


export type MutationUpdateHotelAmenityArgs = {
  input: UpdateHotelAmenity;
};


export type MutationUpdateHotelBookingArgs = {
  input: UpdateHotelBooking;
};


export type MutationUpdateHotelBookingPaymentArgs = {
  input: UpdateHotelBookingPayment;
};


export type MutationUpdateHotelFacilityArgs = {
  input: UpdateHotelFacility;
};


export type MutationUpdateHotelPolicyArgs = {
  input: UpdateHotelPolicy;
};


export type MutationUpdateHotelRefundArgs = {
  input: UpdateHotelRefund;
};


export type MutationUpdateHotelReviewArgs = {
  input: UpdateHotelReview;
};


export type MutationUpdateHotelRoomArgs = {
  input: UpdateHotelRoom;
};


export type MutationUpdateHotelRoomInclusionArgs = {
  input: UpdateHotelRoomInclusion;
};


export type MutationUpdateHotelRoomPriceArgs = {
  input: UpdateHotelRoomPrice;
};


export type MutationUpdateHotelRoomPriceSeasonArgs = {
  input: UpdateHotelRoomPriceSeason;
};


export type MutationUpdateHotelRoomPriceYearArgs = {
  input: UpdateHotelRoomPriceYear;
};


export type MutationUpdateLocationArgs = {
  input: UpdateLocation;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export enum PriceTypeEnum {
  Fixed = 'FIXED',
  Seasonal = 'SEASONAL'
}

export type Query = {
  __typename?: 'Query';
  amenities: AmenityConnection;
  amenity?: Maybe<Amenity>;
  citiesByRegionId: Array<Maybe<City>>;
  city?: Maybe<City>;
  countries: CountryConnection;
  country?: Maybe<Country>;
  file?: Maybe<File>;
  files: FileConnection;
  filesByHotelId: ImageUrls;
  hotel?: Maybe<Hotel>;
  hotelAmenities: HotelAmenityConnection;
  hotelAmenity?: Maybe<HotelAmenity>;
  hotelBooking?: Maybe<HotelBooking>;
  hotelBookingPayment?: Maybe<HotelBookingPayment>;
  hotelBookingPayments: HotelBookingPaymentConnection;
  hotelBookings: HotelBookingConnection;
  hotelFacilities: HotelFacilityConnection;
  hotelFacility?: Maybe<HotelFacility>;
  hotelPolicies: HotelPolicyConnection;
  hotelPolicy?: Maybe<HotelPolicy>;
  hotelRefund?: Maybe<HotelRefund>;
  hotelRefunds: HotelRefundConnection;
  hotelReview?: Maybe<HotelReview>;
  hotelReviews: HotelReviewConnection;
  hotelRoom?: Maybe<HotelRoom>;
  hotelRoomInclusion?: Maybe<HotelRoomInclusion>;
  hotelRoomInclusions: HotelRoomInclusionConnection;
  hotelRoomPrice?: Maybe<HotelRoomPrice>;
  hotelRoomPriceSeason?: Maybe<HotelRoomPriceSeason>;
  hotelRoomPriceSeasons: HotelRoomPriceSeasonConnection;
  hotelRoomPriceYear?: Maybe<HotelRoomPriceYear>;
  hotelRoomPriceYears: HotelRoomPriceYearConnection;
  hotelRoomPrices: HotelRoomPriceConnection;
  hotelRooms: HotelRoomConnection;
  hotels: HotelConnection;
  location?: Maybe<Location>;
  locations: LocationConnection;
  region?: Maybe<Region>;
  regionsByCountryId: Array<Maybe<Region>>;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryAmenitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAmenityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCitiesByRegionIdArgs = {
  regionId: Scalars['String']['input'];
};


export type QueryCityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFilesByHotelIdArgs = {
  hotelId: Scalars['String']['input'];
};


export type QueryHotelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelAmenitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelAmenityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelBookingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelBookingPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelBookingPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelBookingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelFacilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelFacilityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelPoliciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelPolicyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelRefundArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelRefundsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelReviewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelRoomArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelRoomInclusionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelRoomInclusionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelRoomPriceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelRoomPriceSeasonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelRoomPriceSeasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelRoomPriceYearArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHotelRoomPriceYearsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelRoomPricesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelRoomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHotelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRegionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRegionsByCountryIdArgs = {
  countryId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export enum RefundStatusType {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING'
}

export type Region = {
  __typename?: 'Region';
  Country?: Maybe<Country>;
  country_id: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  region?: Maybe<Scalars['String']['output']>;
  region_description?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type RegionConnection = {
  __typename?: 'RegionConnection';
  edges: Array<RegionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RegionEdge = {
  __typename?: 'RegionEdge';
  cursor: Scalars['String']['output'];
  node: Region;
};

export type UpdateAmenity = {
  amenity?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateCity = {
  city?: InputMaybe<Scalars['String']['input']>;
  city_description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateCountry = {
  country?: InputMaybe<Scalars['String']['input']>;
  country_description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateFile = {
  caption?: InputMaybe<Scalars['String']['input']>;
  file_key?: InputMaybe<Scalars['String']['input']>;
  file_type?: InputMaybe<Scalars['String']['input']>;
  hotel_id?: InputMaybe<Scalars['String']['input']>;
  hotel_room_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location_id?: InputMaybe<Scalars['String']['input']>;
  mimetype?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHotel = {
  hotel_description?: InputMaybe<Scalars['String']['input']>;
  hotel_name?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  latitude?: InputMaybe<Scalars['Float']['input']>;
  location_id?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  start_category?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateHotelAmenity = {
  amenity_id?: InputMaybe<Scalars['String']['input']>;
  hotel_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateHotelBooking = {
  booking_date?: InputMaybe<Scalars['Date']['input']>;
  booking_status?: InputMaybe<BookingStatusType>;
  hotel_room_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  number_of_people?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHotelBookingPayment = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  hotel_booking_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  number_of_people?: InputMaybe<Scalars['Int']['input']>;
  payment_date?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateHotelFacility = {
  hotel_facility?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateHotelPolicy = {
  hotel_policy?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateHotelRefund = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  hotel_booking_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  refund_date?: InputMaybe<Scalars['Date']['input']>;
  refund_status?: InputMaybe<RefundStatusType>;
};

export type UpdateHotelReview = {
  comment?: InputMaybe<Scalars['String']['input']>;
  hotel_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  rating?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHotelRoom = {
  bed_type?: InputMaybe<Scalars['String']['input']>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  discounted_price?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  price_type?: InputMaybe<PriceTypeEnum>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  room_type?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateHotelRoomInclusion = {
  id: Scalars['ID']['input'];
  inclusion?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHotelRoomPrice = {
  id: Scalars['ID']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateHotelRoomPriceSeason = {
  id: Scalars['ID']['input'];
  season_end?: InputMaybe<Scalars['Date']['input']>;
  season_start?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateHotelRoomPriceYear = {
  id: Scalars['ID']['input'];
  room_price_year?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateLocation = {
  id: Scalars['ID']['input'];
  location_description?: InputMaybe<Scalars['String']['input']>;
  location_name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRegion = {
  id: Scalars['ID']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  region_description?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime']['output'];
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type CityFragmentFragment = { __typename?: 'City', id: string, city?: string | null, city_description?: string | null, region_id: string } & { ' $fragmentName'?: 'CityFragmentFragment' };

export type CountryFragmentFragment = { __typename?: 'Country', id: string, country?: string | null, country_description?: string | null } & { ' $fragmentName'?: 'CountryFragmentFragment' };

export type FileFragmentFragment = { __typename?: 'File', caption: string, mimetype: string, file_key: string, file_type: string } & { ' $fragmentName'?: 'FileFragmentFragment' };

export type HotelFragmentFragment = { __typename?: 'Hotel', id: string, hotel_name: string, hotel_description?: string | null, start_category?: number | null, location_id: string, latitude?: number | null, longitude?: number | null, Location?: { __typename?: 'Location', id: string, location_name?: string | null, location_description?: string | null, City?: (
      { __typename?: 'City', Region?: (
        { __typename?: 'Region', Country?: (
          { __typename?: 'Country' }
          & { ' $fragmentRefs'?: { 'CountryFragmentFragment': CountryFragmentFragment } }
        ) | null }
        & { ' $fragmentRefs'?: { 'RegionFragmentFragment': RegionFragmentFragment } }
      ) | null }
      & { ' $fragmentRefs'?: { 'CityFragmentFragment': CityFragmentFragment } }
    ) | null } | null } & { ' $fragmentName'?: 'HotelFragmentFragment' };

export type RegionFragmentFragment = { __typename?: 'Region', id: string, region?: string | null, region_description?: string | null, country_id: string } & { ' $fragmentName'?: 'RegionFragmentFragment' };

export type CreateFileMutationVariables = Exact<{
  input: CreateFile;
}>;


export type CreateFileMutation = { __typename?: 'Mutation', createFile: (
    { __typename?: 'File' }
    & { ' $fragmentRefs'?: { 'FileFragmentFragment': FileFragmentFragment } }
  ) };

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocation;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename?: 'Location', id: string, location_name?: string | null, location_description?: string | null, city_id: string } };

export type UpdateHotelMutationVariables = Exact<{
  input: UpdateHotel;
}>;


export type UpdateHotelMutation = { __typename?: 'Mutation', updateHotel: { __typename?: 'Hotel', id: string } };

export type UpdateLocationMutationVariables = Exact<{
  input: UpdateLocation;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutation', updateLocation: { __typename?: 'Location', id: string } };

export type CitiesByRegionIdQueryVariables = Exact<{
  regionId: Scalars['String']['input'];
}>;


export type CitiesByRegionIdQuery = { __typename?: 'Query', citiesByRegionId: Array<(
    { __typename?: 'City' }
    & { ' $fragmentRefs'?: { 'CityFragmentFragment': CityFragmentFragment } }
  ) | null> };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: { __typename?: 'CountryConnection', edges: Array<{ __typename?: 'CountryEdge', node: (
        { __typename?: 'Country' }
        & { ' $fragmentRefs'?: { 'CountryFragmentFragment': CountryFragmentFragment } }
      ) }> } };

export type HotelQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HotelQuery = { __typename?: 'Query', hotel?: (
    { __typename?: 'Hotel' }
    & { ' $fragmentRefs'?: { 'HotelFragmentFragment': HotelFragmentFragment } }
  ) | null };

export type FilesByHotelIdQueryVariables = Exact<{
  hotelId: Scalars['String']['input'];
}>;


export type FilesByHotelIdQuery = { __typename?: 'Query', filesByHotelId: { __typename?: 'ImageUrls', Urls: Array<string> } };

export type RegionsByCountryIdQueryVariables = Exact<{
  countryId: Scalars['String']['input'];
}>;


export type RegionsByCountryIdQuery = { __typename?: 'Query', regionsByCountryId: Array<(
    { __typename?: 'Region' }
    & { ' $fragmentRefs'?: { 'RegionFragmentFragment': RegionFragmentFragment } }
  ) | null> };

export const FileFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}},{"kind":"Field","name":{"kind":"Name","value":"file_key"}},{"kind":"Field","name":{"kind":"Name","value":"file_type"}}]}}]} as unknown as DocumentNode<FileFragmentFragment, unknown>;
export const CityFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CityFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"City"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"city_description"}},{"kind":"Field","name":{"kind":"Name","value":"region_id"}}]}}]} as unknown as DocumentNode<CityFragmentFragment, unknown>;
export const RegionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RegionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"region_description"}},{"kind":"Field","name":{"kind":"Name","value":"country_id"}}]}}]} as unknown as DocumentNode<RegionFragmentFragment, unknown>;
export const CountryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"country_description"}}]}}]} as unknown as DocumentNode<CountryFragmentFragment, unknown>;
export const HotelFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HotelFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hotel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hotel_name"}},{"kind":"Field","name":{"kind":"Name","value":"hotel_description"}},{"kind":"Field","name":{"kind":"Name","value":"start_category"}},{"kind":"Field","name":{"kind":"Name","value":"location_id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"Location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location_name"}},{"kind":"Field","name":{"kind":"Name","value":"location_description"}},{"kind":"Field","name":{"kind":"Name","value":"City"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CityFragment"}},{"kind":"Field","name":{"kind":"Name","value":"Region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RegionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"Country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CityFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"City"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"city_description"}},{"kind":"Field","name":{"kind":"Name","value":"region_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RegionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"region_description"}},{"kind":"Field","name":{"kind":"Name","value":"country_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"country_description"}}]}}]} as unknown as DocumentNode<HotelFragmentFragment, unknown>;
export const CreateFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFile"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}},{"kind":"Field","name":{"kind":"Name","value":"file_key"}},{"kind":"Field","name":{"kind":"Name","value":"file_type"}}]}}]} as unknown as DocumentNode<CreateFileMutation, CreateFileMutationVariables>;
export const CreateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLocation"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location_name"}},{"kind":"Field","name":{"kind":"Name","value":"location_description"}},{"kind":"Field","name":{"kind":"Name","value":"city_id"}}]}}]}}]} as unknown as DocumentNode<CreateLocationMutation, CreateLocationMutationVariables>;
export const UpdateHotelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateHotel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateHotel"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateHotel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateHotelMutation, UpdateHotelMutationVariables>;
export const UpdateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLocation"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateLocationMutation, UpdateLocationMutationVariables>;
export const CitiesByRegionIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CitiesByRegionId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"regionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"citiesByRegionId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"regionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"regionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CityFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CityFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"City"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"city_description"}},{"kind":"Field","name":{"kind":"Name","value":"region_id"}}]}}]} as unknown as DocumentNode<CitiesByRegionIdQuery, CitiesByRegionIdQueryVariables>;
export const CountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"country_description"}}]}}]} as unknown as DocumentNode<CountriesQuery, CountriesQueryVariables>;
export const HotelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Hotel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HotelFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CityFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"City"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"city_description"}},{"kind":"Field","name":{"kind":"Name","value":"region_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RegionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"region_description"}},{"kind":"Field","name":{"kind":"Name","value":"country_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CountryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"country_description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HotelFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hotel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hotel_name"}},{"kind":"Field","name":{"kind":"Name","value":"hotel_description"}},{"kind":"Field","name":{"kind":"Name","value":"start_category"}},{"kind":"Field","name":{"kind":"Name","value":"location_id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"Location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location_name"}},{"kind":"Field","name":{"kind":"Name","value":"location_description"}},{"kind":"Field","name":{"kind":"Name","value":"City"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CityFragment"}},{"kind":"Field","name":{"kind":"Name","value":"Region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RegionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"Country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CountryFragment"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HotelQuery, HotelQueryVariables>;
export const FilesByHotelIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FilesByHotelId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hotelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filesByHotelId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hotelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hotelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Urls"}}]}}]}}]} as unknown as DocumentNode<FilesByHotelIdQuery, FilesByHotelIdQueryVariables>;
export const RegionsByCountryIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RegionsByCountryId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regionsByCountryId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"countryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RegionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RegionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Region"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"region_description"}},{"kind":"Field","name":{"kind":"Name","value":"country_id"}}]}}]} as unknown as DocumentNode<RegionsByCountryIdQuery, RegionsByCountryIdQueryVariables>;