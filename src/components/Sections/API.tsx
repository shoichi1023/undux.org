import * as React from 'react'
import APIConnect from '../../copy/APIConnect.md'
import APIConnectExport from '../../copy/APIConnectExport.md'
import APICreateStore from '../../copy/APICreateStore.md'
import APIGet from '../../copy/APIGet.md'
import APIOn from '../../copy/APIOn.md'
import APISet from '../../copy/APISet.md'
import APISetPartialApplication from '../../copy/APISetPartialApplication.md'
import EffectsModelUpdate from '../../copy/EffectsModelUpdate.md'
import EffectsRxSimple from '../../copy/EffectsRxSimple.md'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function API() {
  return <>
    <SectionSubheading href='api/createStore'><InlineCode>createStore(initialState)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>createStore</InlineCode> to create a new store with an initial state. Be sure to define a key for each field on your store, even if it's <InlineCode>undefined</InlineCode> at first.</p>
    <PolyglotCode code={APICreateStore} />
    <SectionSubheading href='api/connect'><InlineCode>connect(store)</InlineCode></SectionSubheading>
    <p><InlineCode>connect</InlineCode> creates a <a href='https://reactjs.org/docs/higher-order-components.html' target='_blank'>Higher Order React Component</a> (HOC) that's connected to your store. Use it to wrap your own React components to connect them to the store too. The HOC will pass your store into every component you wrap it with as <InlineCode>props.store</InlineCode>. Connected components re-render automatically whenever the store updates.</p>
    <PolyglotCode code={APIConnect} />
    <p>A common pattern is to assign the HOC returned by <InlineCode>connect</InlineCode> to a variable named <InlineCode>withStore</InlineCode>, and export it for other React components to use.</p>
    <PolyglotCode code={APIConnectExport} />
    <SectionSubheading href='api/get'><InlineCode>store.get(key)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>get</InlineCode> to read the value of a field on your store.</p>
    <PolyglotCode code={APIGet} />
    <SectionSubheading href='api/set'><InlineCode>store.set(key)(value)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>set</InlineCode> to write a value to a field on your store.</p>
    <PolyglotCode code={APISet} />
    <p><InlineCode>set</InlineCode> is auto-curried: call it with just a key, and get back a convenient setter function.</p>
    <PolyglotCode code={APISetPartialApplication} />
    <SectionSubheading href='api/on'><InlineCode>store.on(key)</InlineCode></SectionSubheading>
    <p>Undux automatically updates your model and re-renders your React components for you. To do anything more complex -- like send a network request, or update another field on the store in response to a field changing -- use the <InlineCode>on</InlineCode> API.</p>
    <p>We call anything that's subscribed to a field update with the <InlineCode>on</InlineCode> API an <em>Effect</em>. Effects are triggered anytime the field they're subscribed to changes.</p>
    <PolyglotCode code={APIOn} />
    <p>You can even use an Effect to trigger another model update.</p>
    <PolyglotCode code={EffectsModelUpdate} />
    <p><InlineCode>on</InlineCode> returns a full <a target='_blank' href='http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html'>RxJS Observable</a>, so you have fine control over how you react to a change. Effects have access to around 100 utility functions that are included with RxJS.</p>
    <PolyglotCode code={EffectsRxSimple} />
  </>
}