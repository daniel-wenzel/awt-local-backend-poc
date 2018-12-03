var manifest = `<?xml version="1.0"?>
<!-- MPD file Generated with GPAC version 0.5.2-DEV-revVersion: 0.5.2-426-gc5ad4e4+dfsg5-1build1  at 2018-11-19T14:28:31.982Z-->
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" minBufferTime="PT1.500S" type="static" mediaPresentationDuration="PT0H0M12.500S" maxSegmentDuration="PT0H0M4.000S" profiles="urn:mpeg:dash:profile:full:2011"> 
 <Period duration="PT0H0M12.500S">
  <BaseURL>http://localhost:3000/segment/QmSnNCfxL7R1ei8Dfk82gsEPykBZjC683iovaxaMxuE1WW/</BaseURL>
  <!--<BaseURL>https://s3-eu-west-1.amazonaws.com/blockchain-puppies/test1/</BaseURL>-->
  <AdaptationSet segmentAlignment="true" maxWidth="1280" maxHeight="720" maxFrameRate="24" par="16:9" lang="und">
   <Representation id="1" mimeType="video/mp4" codecs="avc1.4d401f" width="1280" height="720" frameRate="24" sar="1:1" startWithSAP="1" bandwidth="2412988">
    <SegmentList timescale="24000" duration="96000">
     <Initialization sourceURL="segment_init.mp4"/>
     <SegmentURL media="segment_1.m4s"/>
     <SegmentURL media="segment_2.m4s"/>
     <SegmentURL media="segment_3.m4s"/>
     <SegmentURL media="segment_4.m4s"/>
    </SegmentList>
   </Representation>
  </AdaptationSet>
 </Period>
</MPD>`
console.log("putting manifest")

const url = 'http://localhost:3000/manifest'
fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: manifest, // body data type must match "Content-Type" header  text/plain
    headers: {
        "Content-Type": "text/plain; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    
})
.then(_ => {
    player.retrieveManifest(url, (manifest) => {
        console.log(JSON.stringify(manifest,0,2))
        player.attachSource(manifest)
    })
}); 