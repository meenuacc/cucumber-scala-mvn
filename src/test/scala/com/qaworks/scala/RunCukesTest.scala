package com.qaworks.scala

import org.junit.runner.RunWith
import cucumber.api.junit.Cucumber
import cucumber.api.CucumberOptions

/**
  * Created by matttully on 20/05/2016.
  */
@RunWith(classOf[Cucumber])
@CucumberOptions(
  features = Array("src/test/resources/features"),
  glue = Array("com/qaworks/scala"),
  plugin = Array("pretty", "html:target/cucumber-report"),
  tags = Array("@api")
)
class RunCukesTest {
}
